var mongoose = require("mongoose");
var deepPopulate = require('mongoose-deep-populate')(mongoose);

var CommentSchema = new mongoose.Schema({
	comment: {type: String, require: true},
	_user : {type: mongoose.Schema.Types.ObjectId, ref: "users"},
	_solution : {type: mongoose.Schema.Types.ObjectId, ref: "solutions"}

}, {timestamps: true});

mongoose.model("comments", CommentSchema)
CommentSchema.plugin(deepPopulate);
