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
app.get("/", (req, res) => {
	const status = {
		"status": "Running"
	};
	res.send(status);
});

// test endpoint
app.get("/api", (req, res) => {
	query = "SELECT * FROM seasons";
	db.query(query, (err, result) => {
		if (err) throw err;
		res.send(result);	
	});
});

app.get("/battlepacks", (req, res) => {
	query = "select * from battlepacks";
	db.query(query, (err, result) => {
		if (err) throw err;
		res.send(result);
	});
});