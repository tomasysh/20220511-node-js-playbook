const Product = require('../models/product');

////////////////////////////////////////////////////////////////

const getIndex = (req, res) => {
    Product.findAll()
        .then((products) => {
            res.status(200)
                .render('index', {
                    products
                });
        })
        .catch((err) => {
            console.log('Product.findAll() error: ', err);
        })
};

module.exports = {
    getIndex
}