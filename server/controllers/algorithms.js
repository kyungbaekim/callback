var mongoose = require("mongoose");
var User = mongoose.model("users");
var Algorithm = mongoose.model('algorithms');
var deepPopulate = require('mongoose-deep-populate')(mongoose);

module.exports = {
	addAlgorithm: function(req,res){
		console.log(req.body)
		var newAlgorithm = new Algorithm(req.body);
		newAlgorithm.save(function(err){
			if(err){
				res.json(err)
			}
		})
	},

	getAlgorithms: function(req, res){
		Algorithm.find({})
		 	.deepPopulate('_user')
			.exec(function(err, algorithms){
				if (err) {
					res.json(err)
				} else {
					console.log(algorithms)
					res.json(algorithms)
				}
			})
	},

	getAlgorithm: function(req, res){
		id = req.params.id
		console.log("In server-side", id)
		Algorithm.findOne({_id: id})
			.deepPopulate('_user _solutions solutions._user solutions._comments solutions._comments._user')
			.exec(function(err, algorithm){
				if (err) {
					res.json(err)
				} else {
					console.log(algorithm)
					res.json(algorithm)
				}
			})

		// })
	}
}
