const express = require("express");
const mysql = require("mysql2/prmomise");

const app = express();
app.use(express.json());
app.listen(3000);
console.log("App server running at port 3000");

async function connectToDatabase() {
	try {
		const connection = await mysql.createConnection({
			host: "localhost",
			user: "idcro",
			password: "password123",
			database: "idculverdb"
		});

		// execute a simple query
		const [rows, fields] = await connection.execute("SELECT * FROM fish");
		console.log("Query results:", rows);

		await connection.end();
	} catch (error) {
		console.error("Database connection failed:", error);
	}
}

// status endpoint
app.get("/status", (request, response) => {
	const status = {
		"status": "Running"
	};
	response.send(status);
});

