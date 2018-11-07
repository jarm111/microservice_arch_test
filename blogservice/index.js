#!/usr/bin/env nodejs
/* eslint-disable */

const 	express = require('express');
const	dotenv = require('dotenv').config();
const	config = require('./config/config');
const	bodyParser = require('body-parser');
const	router = require('./router/router');
const	http = require('http');
const	cors = require('cors');
const	app = express();
const	mongoose = require('mongoose');
process.env.NODE_ENV = 'developement';

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
router(app);

mongoose.Promise = global.Promise;
console.log(config.database.url)
// Connecting to the database
mongoose.connect(config.database.url, {
	useNewUrlParser: true
}).then(() => {
	console.log('Successfully connected to the database');    
}).catch(err => {
	console.log('Could not connect to the database. Exiting now...', err);
	process.exit();
});

const server = http.createServer(app);

server.listen(config.main.port, () => console.log(`API running on localhost:${config.main.port}`));


module.exports = server;