var express = require("express");
var router = express.Router();

// Import the model (burger.js)
var burger = require("../models/burger.js");

// will default to the index page for initial start up

router.get("/", function (req, res) {
  res.redirect("/burgers");
});

router.get("/burgers", function (req, res) {
  burger.all(function (data) {
    console.log(data);
    var hbsObject = {
      burgers: data,
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/burgers/create", function (req, res) {
  console.log(res);
  burger.create(
    ["burger_name", "devoured"],
    [req.body.burger_name, req.body.devoured],
    function (results) {
      res.redirect("/burgers");
      // will send the id of the new burger back
      res.json({ id: results.insertId });
    }
  );
});

router.put("/burgers/update/:id", function (req, res) {
  var condition = "id = " + req.params.id;

  console.log("condition", condition);

  burger.update(
    {
      devoured: req.body.devoured,
    },
    condition,
    function (results) {
      res.redirect("/burgers");
      if (results.changedRows == 0) {
        return res.status(404).end();
      } else {
        res.status(200).end();
      }
    }
  );
});

router.delete("/burgers/delete/:id", function (req, res) {
  var condition = "id = " + req.params.id;

  burger.delete(condition, function (results) {
    res.redirect("/burgers");
    if (results.affectedRows == 0) {
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

// // will be used to create a new burger of users choice
module.exports = router;
