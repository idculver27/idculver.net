require("dotenv").config();
const express = require("express");
const fs = require("fs");
const https = require("https");
const mysql = require("mysql");

// env vars
const cert_path = process.env.CERT_PATH || "ssl/idculver_net.crt";
const key_path = process.env.KEY_PATH || "ssl/culverpi.key";
const port = process.env.PORT || 3000;

// initialize app
const app = express();
app.use(express.json());

// initialize server
const options = {
	cert: fs.readFileSync(cert_path, "utf8"),
	key: fs.readFileSync(key_path, "utf8")
};
const server = https.createServer(options, app);
server.listen(port, () => {
	console.log(`App listening on https://localhost:${port}`);
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
app.get("/api", (req, res) => {
	const status = {
		"status": "Running",
		"endpoints": [
			"/api/battle_packs"
		]
	};
	res.send(status);
});

// battle packs endpoint
app.get("/api/battle_packs", (req, res) => {
	query = `
		SELECT set_number, set_name, release_year, piece_count, msrp, 
		JSON_OBJECT (
			'title', title,
			'short_title', short_title
		) AS source, (
			SELECT JSON_ARRAYAGG(
				JSON_OBJECT(
					'bl_id', bl_id,
					'minifig_name', minifig_name,
					'specification', specification,
					'count', count,
					'is_unique', is_unique
				)
			)
			FROM battle_pack_has_minifig
			JOIN minifig USING (bl_id)
			WHERE battle_pack.set_number = battle_pack_has_minifig.set_number 
		) AS minifigs
		FROM battle_pack
		JOIN source USING (source_id)
		ORDER BY release_year, set_number;
	`;
	db.query(query, (err, result) => {
		if (err) {
			res.status(500).send("Server encountered an error :(");	
			throw err;
		}

		// parse json
		for (let set of result) {
			set.source = JSON.parse(set.source);
			set.minifigs = JSON.parse(set.minifigs);
		}
		
		// make bools into real bools
		for (let set of result) {
			if (set.minifigs) {
				for (let minifig of set.minifigs) {
					minifig.is_unique = !!minifig.is_unique;
				}
			}
		}
		res.send(result);
	});
});
