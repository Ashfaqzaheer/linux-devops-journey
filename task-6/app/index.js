// Import mysql client
const mysql = require("mysql2");

// Create DB connection using service name "db"
const db = mysql.createConnection({
  host: "db",          // Docker Compose service name
  user: "root",
  password: "rootpass",
  database: "testdb"
});

// Connect to DB
db.connect(err => {
  if (err) throw err;
  console.log("Connected to MySQL");
});

// Simple HTTP server
require("http").createServer((req, res) => {
  res.end("Node + MySQL running");
}).listen(3000);
