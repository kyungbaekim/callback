var mongoose = require("mongoose");
var deepPopulate = require('mongoose-deep-populate')(mongoose);

var AlgorithmSchema = new mongoose.Schema({
	title : {type: String, require: true},
	description: {type: String, require: true},
	category : {type: String, require: true},
	views : {type: Number, default: 0},
	_user : {type: mongoose.Schema.Types.ObjectId, ref: "users"},
	_solutions : [{type: mongoose.Schema.Types.ObjectId, ref: "solutions"}]

}, {timestamps: true});

mongoose.model("algorithms", AlgorithmSchema)
AlgorithmSchema.plugin(deepPopulate);
