require('dotenv').config();
const express = require('express');
const app = express();
const	bodyParser = require('body-parser');
const	cors = require('cors');
var mongoose = require('mongoose');
const {port, dbUri} = require('./config/config');
const router = require('./routers/commentRouter');

app.use(bodyParser.json());
app.use(cors());

app.use('/api', router);
app.get('/', (req, res) => res.send('Comment Service api'));

mongoose.connect(dbUri, {useNewUrlParser: true}).then(() => {
  console.log('Successfully connected to the database');    
}).catch(err => {
  console.error('Could not connect to the database. Exiting now...', err);
  process.exit();
});

app.listen(port, () => console.log(`Comment Service listening on port ${port}!`));