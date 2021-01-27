// Set up MySql connection.
var mysql = require("mysql");

var connection;

if (process.env.JAWDB_URL) {
  connection = mysql.createConnection(process.env.JAWDB_URL);
} else {
  connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "",
    database: "burgers_db",
  });
}

// Create connection
connection.connect(function (err) {
  if (err) {
    console.error("error connecting" + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Exports the connection for ORM to use
module.exports = connection;
