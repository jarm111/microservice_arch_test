#!/usr/bin/env nodejs

const express = require('express'),
	dotenv = require('dotenv').config(),
	config = require('./config/config'),
	bodyParser = require('body-parser'),
	bcrypt = require('bcryptjs'),
	router = require('./router/router'),
	models = require('./models'),
	http = require('http'),
	cors = require('cors'),
	app = express(),
	path = require('path');

process.env.NODE_ENV = "developement"

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
models.sequelize.authenticate().then(() => console.log('DB Connected')).catch((err) => console.log('Error connecting to DB: ' + err.stack));
models.sequelize.sync().then(() => console.log('Models synced.')).catch((err) => console.log('Error syncing models: ' + err.stack));
router(app);

const server = http.createServer(app);

server.listen(config.main.port, () => console.log(`API running on localhost:${config.main.port}`));

module.exports = server;
