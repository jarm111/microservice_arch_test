const model = require('../models/index'),
	bcrypt = require('bcrypt'),
	path = require('path'),
	crypto = require('crypto'),
	jwt = require('jsonwebtoken'),
	config = require('../config/config'),
	async = require('async'),
	User = model.users

function generateJwt(user) {
	return jwt.sign(user, config.main.jwt_secret);
};

function setUserInfo(request) {
	return {
		_id: request.customer_id,
		email: request.email
	}
};

const checkPassword = function (candidatePassword, password) {
	return bcrypt.compareSync(candidatePassword, password)
};

function hashPassword(password) {
	return bcrypt.hashSync(password, 10, null);
};

exports.localRegister = (req, res, next) => {
	let firstName = req.body.firstName,
		lastName = req.body.lastName,
		email = req.body.email,
		password = req.body.password
	console.log(req.body)
	User.findOne({
		where: { email: email }
	})
		.then((user) => {
			if (user) {
				res.status(400).json({
					message: 'Sähköposti on jo rekisteröity käyttäjälle.'
				});
			}
			else {
				let userPassword = hashPassword(password);
				const data = {
					firstName: firstName,
					lastName: lastName,
					email: email,
					password: userPassword,
				};
				User.create(data)
					.then((newUser) => {
						// Luodaan käyttäjälle JWT
						const userInfo = setUserInfo(newUser);
						if (newUser) {
							res.status(201).json({
								message: 'Käyttäjä luotu',
								user: userInfo,
								token: generateJwt(userInfo)
							});
						} 
					});
			}
		})
		.catch((err) => {
			console.error('localRegister epäonnistui: ' + err.stack);
		});
};

exports.localLogin = (req, res, next) => {
	User.findOne({
		where: { email: req.body.email }
	})
	.then((user) => {
		if (!user) return res.status(404).json({ success: false, message: 'Käyttäjää ei löytynyt' });
		if (!checkPassword(req.body.password, user.dataValues.password)) return res.status(401).json({ success: false, message: 'Salasanat eivät täsmää' });
		const userInfo = setUserInfo(user.dataValues);
		console.log(userInfo);
		res.status(200).json({
			message: 'Successfully logged in',
			token: generateJwt(userInfo),
			_id: userInfo._id,
			firstName: user.firstName,
			lastName: user.lastName
		});
	})
	.catch((err) => {
		console.log('localLogin failed: ' + err.stack);
	});
	
};
