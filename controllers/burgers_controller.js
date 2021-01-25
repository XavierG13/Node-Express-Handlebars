var express = require("express");
var router = express.Router();

// Import the model (burger.js)
var burger = require("../models/burger.js");

// will default to the index page for initial start up

router.get("/", function (req, res) {
  burger.all(function (data) {
    console.log(data);
    var hbsObject = {
      burgers: data,
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/api/burgers", function (req, res) {
  console.log(res);
  burger.create(
    ["burger_name", "devoured"],
    [req.body.burger_name, req.body.devoured],
    function (results) {
      // will send the id of the new burger back
      res.json({ id: results.insertId });
    }
  );
});

router.put("/api/burgers/:id", function (req, res) {
  var condition = "id = " + req.params.id;

  console.log("condition", condition);

  burger.update(
    {
      devoured: req.body.devoured,
    },
    condition,
    function (results) {
      if (results.changedRows == 0) {
        return res.status(404).end();
      } else {
        res.status(200).end();
      }
    }
  );
});

router.delete("/api/burgers/:id", function (req, res) {
  var condition = "id = " + req.params.id;

  burger.delete(condition, function (results) {
    if (results.affectedRows == 0) {
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

// // will be used to create a new burger of users choice
module.exports = router;
