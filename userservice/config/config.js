/* eslint-disable */
module.exports = {
	database: {
		username: process.env.DB_USER,
		password: process.env.DB_PASSWORD,
		database: process.env.DB_DATABASE,
		host: process.env.DB_HOST,
		dialect: 'mysql'
	},
	main: {
		port: process.env.PORT,
		jwt_secret: process.env.JWT_SECRET,
	}
};
