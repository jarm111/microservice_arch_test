const mongoose = require('mongoose');

const Schema = mongoose.Schema;

//mongoose"schema"

const blogpostSchema = new Schema({

	user: {
		type: String,
		required: [true, 'Username is required']
	},
	title: {
		type: String,
		required: [true, 'Post title is required']
	},
	post: {
		type: String,
		required: [true, 'Post is required']
	},
	userID: {
		type: String,
		required: [true, 'no userID provided']
	},
	created_at: {
		type: Date,
		default: Date.now
	}
});

module.exports = mongoose.model('blogpost', blogpostSchema);