const Products = require('./model');

const getProducts = () => new Promise((resolve, reject) => {
  return Products.find({}).then((products) => {
    if (!products) reject(new Error('no products found'));
    resolve(products);
  })
})

const getProductByASIN = (asin) => new Promise((resolve, reject) => {
  return Products.findOne({ asin }).then((product) => {
    if (!product) reject(new Error('no such product')) // hit amazon to get the product here
    resolve(product)
  })
})


module.exports = {
  getProducts,
  getProductByASIN,
}
