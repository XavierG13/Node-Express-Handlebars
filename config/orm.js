// Imports Mysql connection
var connection = require("../config/connection.js");

// Loops through and creates an array of questions marks - ["?", "?", "?"] - and turns it into a string
function printQuestionMarks(num) {
  var arr = [];

  for (var i = 0; i < num; i++) {
    arr.push("?");
  }

  return arr.toString();
}

// Converts object key/value pairs to SQL syntax
function objToSql(ob) {
  var arr = [];

  for (var key in ob) {
    var value = ob[key];
    if (Object.hasOwnProperty.call(ob, key)) {
      if (typeof value === "string" && value.indexOf(" ") >= 0) {
        value = "'" + value + "'";
      }

      arr.push(key + "=" + value);
    }
  }
  return arr.toString();
}

var orm = {
  selectAll: function () {},

  insertOne: function () {},

  updateOne: function () {},
};

module.exports = orm;
