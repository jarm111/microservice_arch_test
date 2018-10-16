const express = require('express'),
	app = express(),
	passport = require('passport'),
	passportService = require('../config/passport'),
	AuthController = require('../controllers/authcontroller'),
	UserController = require('../controllers/usercontroller')

module.exports = (app) => {

	const router = express.Router();
	app.use('/api', router);

	const jwtAuth = passport.authenticate('jwt', { session: false });

	//testidata 
	router.get('/user', UserController.getData);

	// Autentikaatioreitit
	router.post('/auth/register', AuthController.localRegister);
	router.post('/auth/login', AuthController.localLogin);

	// Käyttäjä CRUD reitit
	router.get('/user/:id', jwtAuth, UserController.getUser);
	router.patch('/user/:id', jwtAuth, UserController.updateUser);
	router.delete('/user/:id', jwtAuth, UserController.deleteUser);
}