const Products = require('./model');

const getProducts = () => new Promise((resolve, reject) => {
  return Products.find({}).then((products) => {
    // if (!products) reject(new Error('no products found'));
    // resolve(products);
    resolve([
      {
        title: 'Sample Product',
        description: 'Description of the sample product',
        asin: 'B002QYW8LW',
        category: 'sampleCategory',
        rank: 'sampleRank',
        dim: {
          height: 24,
          width: 13,
        },
      }
    ])
  })
})

const getProductByASIN = (asin) => new Promise((resolve, reject) => {
  return Products.findOne({ asin }).then((product) => {
    // if (!product) reject(new Error('no such product')) // hit amazon to get the product here
    // resolve(product)
    resolve(
      {
        title: 'New Product',
        description: 'Description of the New product',
        asin: asin,
        category: 'newCategory',
        rank: 'newRank',
        dim: {
          height: 36,
          width: 87,
        },
      }
    )
  })
})


module.exports = {
  getProducts,
  getProductByASIN,
}
