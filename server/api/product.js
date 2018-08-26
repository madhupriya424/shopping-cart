module.exports = function (oApp) {

    var {Product} = require('../db/models/product.js');

    oApp.get('/api/products', (req, res) => {
        Product.find().then((products) => {
            res.send({products});
        }, (err) => {
            res.status(400).send(err);
        })
    })

    oApp.post('/api/products', (req, res) => {
        //console.log(req.body);
        product = new Product(req.body);
        product.save().then((product) => {
            res.send(product);
        }, (err) => {
            res.status(400).send(err);
        });
    }); 
};