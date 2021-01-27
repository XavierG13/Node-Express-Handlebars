var express = require("express");
var router = express.Router();

// Import the model (burger.js)
var burgers = require("../models/burger.js");

// will default to the index page for initial start up

router.get("/", function (req, res) {
  res.redirect("/burgers");
});

router.get("/burgers", function (req, res) {
  burgers.all(function (data) {
    // console.log(data);
    var hbsObject = {
      burgers: data,
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/burgers/create", function (req, res) {
  // console.log(res);
  burgers.create(["burger_name"], [req.body.burger_name], function (result) {
    // will send the id of the new burger back
    // res.json({ id: result.insertId });
    res.redirect("/burgers");
  });
  // res.json({ id: result.insertId });
});

router.put("/burgers/update/:id", function (req, res) {
  var condition = "id = " + req.params.id;

  console.log("condition", condition);

  burgers.update({ devoured: req.body.devoured }, condition, function (data) {
    res.redirect("/burgers");
    if (data.changedRows == 0) {
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

router.delete("/burgers/delete/:id", function (req, res) {
  var condition = "id = " + req.params.id;

  burgers.delete(condition, function (data) {
    if (data.affectedRows == 0) {
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
  res.redirect("/burgers");
});

// // will be used to create a new burger of users choice
module.exports = router;
