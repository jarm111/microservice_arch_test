const express = require('express'),
  app = express(),
  UserService = require('./routes/userservice')

module.exports = (app) => {
  
  const router = express.Router();
  app.use('/api', router);
  
  //testidata 
  router.get('/', UserService.getData);
}