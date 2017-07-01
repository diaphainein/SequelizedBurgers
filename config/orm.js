// connection whatnots 
var connection = require("./connection.js");

// put orm here
var orm = {
	all: function(table, cb){
		var query = "SELECT * FROM " + table + ";";
		connection.query( query, function(err, result){
			if(err) throw err;
			cb(result);
		})
	},

	update: function(table, condition, cb){
		var query= "UPDATE " + table + " SET devoured=true WHERE id=" + condition + ";";
		connection.query(query, function(err, result){
			if(err) throw err;
			cb(result);
		})
	},

	create: function(table, value, cb){
		var query= "INSERT INTO " + table + " (burger_name) VALUES ('" + value + "');";
		connection.query(query, function(err, result){
			if(err) throw err;
			cb(result);
		})
	}
};

module.exports = orm;