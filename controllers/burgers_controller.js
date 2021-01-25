var express = require("express");
var router = express.Router();

// Import the model (burger.js)
var burger = require("../models/burger.js");

// will default to the index page for initial start up
router.get("/", function (req, res) {
  burger.all(function (data) {
    var hbsObject = {
      burgers: data,
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.put("/api/burgers/:id", function (req, res) {
  var condition = "id = " + req.params.id;

  console.log("condition", condition);
});

// // will be used to create a new burger of users choice
// router.post("/api/burgers", function (req, res) {
//   console.log(res);
//   burger.create(
//     ["burger_name", "devoured"],
//     [req.body.burger_name, req.body.devoured],
//     function (results) {
//       // will send the id of the new burger back
//       res.json({ id: results.insertId });
//     }
//   );
// });
module.exports = router;
