const express = require('express');

const router = express.Router();
const routes = require('./config/routes');

Object.keys(routes).forEach((route) => {
	router.use(routes[route], require(`./modules/${route}/router`));
});

module.exports = router;
