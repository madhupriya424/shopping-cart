module.exports = function (oApp) {

    var {Categories} = require('../db/models/categories.js');

    oApp.get('/api/categories', (req, res) => {
        Categories.find().then((categories) => {
            res.send({categories});
        }, (err) => {
            res.status(400).send(err);
        })
    })

    oApp.post('/api/categories', (req, res) => {
        //console.log(req.body);
        categories = new Categories(req.body);
        categories.save().then((categories) => {
            res.send(categories);
        }, (err) => {
            res.status(400).send(err);
        });
    }); 
};