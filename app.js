
var express = require("express");
var app = express();

//constants
const PORT = 8080;
const IP = "0.0.0.0";


//ROUTES//

//root route//
/*
app.get("/",function(req,res){
	res.send("you are in root page");
});
*/
app.get("/",function(req,res){
	res.render("home.ejs");
});

//wellcome
app.get("/:userName",function(req,res){
	var name = req.params.userName;
	res.render("welcome.ejs",{uname:name})
});

//upload route//
app.get("/upload",function(req,res){
	res.send("you are in upload page");
});

//analytic results//
app.get("/result",function(req,res){
	res.send("you are in result page");
});


app.listen(PORT,IP,function(){
	console.log("Now server is up and listening");
});
 