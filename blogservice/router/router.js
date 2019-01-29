const express = require('express');
//const app = express();
const BlogController = require('../controllers/blogcontroller');

module.exports = (app) => {
	const router = express.Router();
	app.use('/api', router);
	router.post('/blog', BlogController.postBlog);
	router.get('/blog', BlogController.getAllBlogs);
	router.get('/blog/:id', BlogController.getBlog);
	router.get('/', BlogController.getDefault);
};