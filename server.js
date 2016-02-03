var express = require('express');
var app = express();
var port = 3000;

var middleware = {
	requireAuthentication: function(req,res, next) {
		console.log('private route hit!');
		next();
	},
	logger: function(req,res,next) {
		console.log("Request type: " + req.method + " " + req.url + " " + new Date());
		next();
	} 
};

//app.use(middleware.requireAuthentication);
//this will get called for every page requested and every route hit
//will be called for index and about

app.use(middleware.logger);

app.get('/about', middleware.requireAuthentication, function(req,res) {
	res.send("About US");
});
//when you want to add a route level middleware, use it on the second argument

app.use(express.static(__dirname + "/public"));

//static server let you access anything in that folder
//when viewing a page on browser, you usually doing a get request

app.listen(port, function() {
	console.log("Server started at port "+ port);
});