console.log("IN ROUTE.JS")

var users = require("../controllers/users.js");
var algorithms = require("../controllers/algorithms.js");

module.exports = function(app){

	app.post('/login', function(req, res){
		users.login(req,res)
	})

	app.post("/register", function(req, res){
		// console.log("IN ROUTE JS REGISTERING" , req.body)
		users.register(req,res)
	})

	app.get("/getUsers", function(req, res){
		users.getUsers(req,res)
	})

	app.post("/addAlgorithm", function(req,res){
		algorithms.addAlgorithm(req,res)
	})

	app.get('/getAlgorithms', function(req, res){
		algorithms.getAlgorithms(req, res)
	})

  app.get('/getAlgorithm/:id', function(req, res){
		algorithms.getAlgorithm(req, res)
	})
}
