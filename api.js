require("dotenv").config();
const express = require("express");
const fs = require("fs");
const https = require("https");
const mysql = require("mysql");

// initialize app
const app = express();
app.use(express.json());

// initialize server
const options = {
	key: fs.readFileSync("ssl/domain.key", "utf8"),
	cert: fs.readFileSync("ssl/domain.crt", "utf8")
};
const server = https.createServer(options, app);
server.listen(3000, () => {
	console.log("App listening on https://localhost:3000");
});


// connect to database
const db = mysql.createConnection({
	host: "localhost",
	user: process.env.DB_USERNAME,
	password: process.env.DB_PASSWORD,
	database: "idculver"
});
db.connect((err) => {
	if (err) throw err;
	console.log("Connected to database");
});

// status endpoint
app.get("/", (req, res) => {
	const status = {
		"status": "Running"
	};
	res.send(status);
});

// battlepacks endpoint
app.get("/battlepacks", (req, res) => {
	query = `
		SELECT set_id, set_name, release_year, short_title AS source_short_title, piece_count, msrp,
			(
				SELECT JSON_ARRAYAGG(
					JSON_OBJECT(
						'bl_id', bl_id,
						'minifig_name', minifig_name,
						'specification', specification,
						'count', count,
						'is_unique', is_unique
					)
				)
				FROM bp_battle_pack_has_minifig
				JOIN bp_minifig USING (bl_id)
				WHERE bp_battle_pack.set_id = bp_battle_pack_has_minifig.set_id 
			) AS minifigs
		FROM bp_battle_pack
		JOIN bp_source USING (source_id)
		ORDER BY release_year, set_id;
	`;
	db.query(query, (err, result) => {
		if (err) throw err;

		// parse json
		for (set of result) {
			set.minifigs = JSON.parse(set.minifigs);
		}
		
		res.send(result);
	});
});