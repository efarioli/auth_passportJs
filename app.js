var express = require("express");
var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/auth_demo_app");


var app = express();
app.set("view engine", "ejs");

app.get("/", function(req,res){
	res.render("home");
});

app.get("/secret", function(req, res){
	res.render("secret");

});

app.listen("3000", "localhost", function(){
	console.log("Server started in Localhost port 3000");
});