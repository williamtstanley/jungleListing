const mongoose = require('mongoose');

const schema = mongoose.Schema({
	title: String,
	description: String,
	createdAt: { type: Date, default: Date.now },
	asin: String,
	category: String,
	rank: Number,
	dim: {
    height: String,
    width: String,
    length: String,
	},
	amazonData: {},
});

module.exports = mongoose.model('Products', schema);
