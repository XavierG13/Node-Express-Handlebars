var express = require("express");

var PORT = process.env.PORT || 8080;

var app = express();

// Serve static content for the app from the "public" in the application directory.
app.use(express.static("public"));

// Parse application as JSON

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Sets Handlebars

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("View engine", "handlebars");

// Import routes and give the server access to them.
var routes = require("./controllers/burgers_controller.js");

app.use(routes);

// Start out server so that it can begin listening to client requests.
app.listen(PORT, function () {
  console.log("Server listening on: http://localhost:" + PORT);
});
