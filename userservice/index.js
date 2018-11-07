#!/usr/bin/env nodejs
/* eslint-disable */

const express = require('express');
const	dotenv = require('dotenv').config();
const	config = require('./config/config');
const	bodyParser = require('body-parser');
const	bcrypt = require('bcryptjs');
const	router = require('./router/router');
const	models = require('./models');
const	http = require('http');
const	cors = require('cors');
const	app = express();
const	path = require('path');

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
