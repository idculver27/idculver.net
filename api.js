const dotenv = require("dotenv").config();
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
console.log(options);
const server = https.createServer(options, app);
const port = process.env.PORT || 3000;
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
app.get("/", (request, response) => {
	const status = {
		"status": "Running"
	};
	response.send(status);
});

// test endpoint
app.get("/api", (request, response) => {
	query = "SELECT * FROM seasons";
	db.query(query, (err, result) => {
		if (err) throw err;
		response.send(result);	
	});
});
