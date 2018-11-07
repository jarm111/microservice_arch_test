const post = require('../models/blogs.js');

exports.postBlog = (req, res) => {
	const blogpost = new post({
		title: req.body.data.title,
		post: req.body.data.post,
		userID: req.body.data.userID,
		user: req.body.data.user
	});
	blogpost.save()
		.then(data => {
			res.send(data);
		}).catch(err => {
			res.status(500).send({
				message: 'server error during posting a post',
				additional: err.message
			});
		});
};
exports.getAllBlogs = (req, res) => {
	post.find({})
		.sort({ created_at: 'descending' })
		.then(posts => {
			posts.api = 'localhost:888';
			res.statusCode = 200;
			res.setHeader('Content-Type', 'application/json');
			res.json(posts);
		}).catch(err => {
			res.status(500).send({
				message: 'server error during getting all posts',
				additional: err.message
			});
		});
};

exports.getBlog = (req, res) => {
	post.findById(req.params.id)
		.then(post => {
			res.statusCode = 200;
			res.setHeader('Content-Type', 'application/json');
			res.json(post);
		}).catch(err => {
			res.status(500).send({
				message: 'server error during getting a post',
				additional: err.message
			});
		});
};

exports.getDefault = (req, res) => {
	const data = {
		data1: 'data',
		data: 'opettele koodaamaa'
	};
	res.send(data);
};