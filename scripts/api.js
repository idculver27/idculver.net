require("dotenv").config();
const express = require("express");
const fs = require("fs");
const https = require("https");
const mysql = require("mysql");

// env vars
const cert_path = process.env.CERT_PATH || "/etc/pki/tls/certs/idculver_net.crt";
const key_path = process.env.KEY_PATH || "/etc/pki/tls/private/culverpi.key";
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
			"/battle_packs",
			"/fish"
		]
	};
	res.send(status);
});

// battle packs endpoint
app.get("/api/battle_packs", (req, res) => {
	query = `
		SELECT set_id, set_name, release_year, short_title AS source_short_title, piece_count, msrp, (
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
		
		// make bools into real bools
		for (set of result) {
			for (minifig of set.minifigs) {
				minifig.is_unique = Boolean(minifig.is_unique);
			}
		}

		res.send(result);
	});
});

// fish endpoint
app.get("/api/fish", (req, res) => {
	query = `
		SELECT fish_name, base_price, bundle_name, JSON_OBJECT(
			'spring', spring,
			'summer', summer,
			'fall', fall,
			'winter', winter
		) AS seasons, (
			SELECT JSON_ARRAYAGG(
				JSON_OBJECT(
					'location_name', location_name,
					'ignore_seasons', ignore_seasons
				)
			)
			FROM sv_fish_in_location
			JOIN sv_location USING (location_id)
			WHERE sv_fish.fish_id = sv_fish_in_location.fish_id
		) AS locations, time_range, weather
		FROM sv_fish
		LEFT JOIN sv_bundle USING (bundle_id)
		JOIN sv_seasons USING (fish_id)
		ORDER BY fish_name, fish_id;
	`;
	db.query(query, (err, result) => {
		if (err) throw err;

		// parse json
		for (fish of result) {
			fish.seasons = JSON.parse(fish.seasons);
			fish.locations = JSON.parse(fish.locations);
		}

		// make bools into real bools
		for (fish of result) {
			for (season in fish.seasons) {
				fish.seasons[season] = Boolean(fish.seasons[season]);
			}
			for (location of fish.locations) {
				location.ignore_seasons = Boolean(location.ignore_seaons);
			}
		}
		
		res.send(result);
	});
});
