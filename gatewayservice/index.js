const express = require('express'),
	dotenv = require('dotenv').config(),
	config = require('./config/config'),
	bodyParser = require('body-parser'),
	router = require('./router/router'),
	http = require('http'),
	cors = require('cors'),
	app = express(),
	path = require('path');

process.env.NODE_ENV = "developement"

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
router(app);

const server = http.createServer(app);

server.listen(config.main.port, () => console.log(`API running on localhost:${config.main.port}`));


module.exports = server;