const passport = require('passport');
const	config = require('./config');
const	JwtStrategy = require('passport-jwt').Strategy;
const	ExtractJwt = require('passport-jwt').ExtractJwt;
const	model = require('../models/index');
const	User = model.users;

const jwtOpts = {
	jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
	secretOrKey: config.main.jwt_secret
};

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