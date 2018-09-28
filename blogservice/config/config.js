module.exports = {
  database: {
    url: process.env.DB_URL,
  },
  main: {
    port: process.env.PORT,
    jwt_secret: process.env.JWT_SECRET,  
  },
};
