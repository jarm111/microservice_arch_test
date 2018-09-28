const express = require('express'),
  app = express(),
  BlogController = require('../controllers/blogcontroller')

module.exports = (app) => {
  
  const router = express.Router();
  app.use('/api', router);

  router.post('/blog', BlogController.postBlog);
  router.get('/blog', BlogController.getAllBlogs);
  router.get('/blog/:id', BlogController.getBlog);

  }