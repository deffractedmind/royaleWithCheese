var express = require("express");
var router = express.Router();
var path = require("path");
// var burger = require("../models/burger.js");
var burger = require(path.join(__dirname,"..", "models", "burger.js"));

router.get("/", function(req, res) {
  burger.all(function(data) {
    var hbsObject = {
      burgers: data
    };
    // console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/", function(req, res) {
  burger.create([
    "burger_name", "devoured"
  ], [
    req.body.name, false //TODO set default for devoured database field to false
  ], function() {
    res.redirect("/");
  });
});

router.put("/:id", function(req, res) {
  var condition = "id = " + req.params.id;
  // console.log("condition", condition);
  burger.update({
    devoured: req.body.devoured
  }, condition, function() {
    res.redirect("/");
  });
});

router.delete("/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  burger.delete(condition, function() {
    res.redirect("/");
  });
});

module.exports = router;
