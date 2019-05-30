require('dotenv').config();
const express = require('express');
const app = express();
var mongoose = require('mongoose');
const {port, dbUri} = require('./config/config');

mongoose.connect(dbUri, {useNewUrlParser: true});

app.get('/', (req, res) => res.send('Comment Service api'));

app.listen(port, () => console.log(`Comment Service listening on port ${port}!`));