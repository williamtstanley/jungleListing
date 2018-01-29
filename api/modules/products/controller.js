const handler = require('./handler');

module.exports = {
	getProducts: (req, res, next) => {
		console.log('getProducts called')
		handler.getProducts()
			.then((response) => {
					res.status(200).send(response);
					next();
			})
			.catch((err) => {
				res.status(403).send(err);
				next(err);
			});
	},
	getProductByASIN: (req, res, next) => {
		console.log('getProductByASIN called')
	  console.log(req.params.asin)
	  let { asin } = req.params;
		handler.getProductByASIN(asin)
			.then((response) => {
				res.status(200).send(response);
				next();
			})
			.catch((err) => {
				res.status(403).send(err);
				next(err);
			});
	},
};
