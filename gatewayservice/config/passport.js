const passport = require('passport'),
	config = require('./config');
	JwtStrategy = require('passport-jwt').Strategy,
	ExtractJwt = require('passport-jwt').ExtractJwt,
	model = require('../models/index'),
	User = model.users;

const jwtOpts = {
	jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
	secretOrKey: config.main.jwt_secret
}

const jwtLogin = new JwtStrategy(jwtOpts, (payload, done) => {
	User.findOne({
		where: { customer_id: payload._id }
	})
		.then((user) => {
			if (user) { done(null, user); }
			else { done(null, false); }
		})
		.catch((err) => {
			console.log('jwtLogin failed: ' + err);
			done(false, err);
		});
});

passport.use(jwtLogin);