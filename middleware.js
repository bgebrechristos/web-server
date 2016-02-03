module.exports.middleware = {
	requireAuthentication: function(req,res, next) {
		console.log('private route hit!');
		next();
	},
	logger: function(req,res,next) {
		console.log("Request type: " + req.method + " " + req.url + " " + new Date());
		next();
	} 
};

//module.exports = middleware;