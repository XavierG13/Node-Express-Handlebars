var express = require("express");

var PORT = process.env.PORT || 8080;

var app = express();

//Lets you use HTTP verbs such as PUT or DELETE in places where the client doesn't support it.
var methodOverride = require("method-override");
//Parse incoming request bodies in a middleware before your handlers, available under the req.body property.
var bodyParser = require("body-parser");

// Serve static content for the app from the "public" in the application directory.
app.use(express.static("public"));

// Parse application as JSON

app.use(bodyParser.urlencoded({ extended: false }));
app.use(methodOverride("_method"));
app.use(express.json());

// Sets Handlebars

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes and give the server access to them.
var routes = require("./controllers/burgers_controller.js");

app.use("/", routes);

// Start out server so that it can begin listening to client requests.
app.listen(PORT, function () {
  console.log("Server listening on: http://localhost:" + PORT);
});
