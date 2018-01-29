const express = require('express');
const config = require('./config/default');
const router = require('./routes');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();

console.log(
	`Connecting to database at: ${config.databaseDSN[process.env.NODE_ENV || 'development']}`
);
mongoose.Promise = global.Promise;
mongoose.connect(config.databaseDSN[process.env.NODE_ENV || 'development']);

console.log('Applying middleware...');
app.use((req, res, next) => {
    res.append('Access-Control-Allow-Origin', ['*']);
    next();
})
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

console.log('Applying Routes...');
app.use(router);

app.listen(56721, () => console.log('Server started listening on localhost:56721'));
