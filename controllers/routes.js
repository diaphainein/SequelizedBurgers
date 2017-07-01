// load dependencies
var express = require("express");
var route = express.Router();
var db = require("../models")

route.get("/", function(req,res){
	db.Burger.findAll({}).then(function(burger_data){
      res.render("index", {burger_data});
    })
});

route.put("/burgers/update", function(req,res){
	db.Burger.update({devoured : 1}, {where : { id : req.body.burger_id }})
	.then(function(){
		res.redirect("/");
	});
});

route.post("/burgers/create", function(req, res){
	db.Burger.create({burger_name: req.body.burger_name})
	.then(function(){
		res.redirect("/");
	});
});

module.exports = route;