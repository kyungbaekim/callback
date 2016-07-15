var mongoose = require("mongoose");
var deepPopulate = require('mongoose-deep-populate')(mongoose);

var SolutionSchema = new mongoose.Schema({
	solution : {type: String, require: true},
	vote : {type: Number, default: 0, min: 0},
	_user : {type: mongoose.Schema.Types.ObjectId, ref: "users"},
	_algorithm : {type: mongoose.Schema.Types.ObjectId, ref: "algorithms"},
  _comments : [{type: mongoose.Schema.Types.ObjectId, ref: "comments"}]

}, {timestamps: true});

mongoose.model("solutions", SolutionSchema)
SolutionSchema.plugin(deepPopulate);
