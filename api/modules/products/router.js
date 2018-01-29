const router = require('express').Router();
const controller = require('./controller');

router.get('/', controller.getProducts);
router.get('/:asin', controller.getProductByASIN);

module.exports = router;
