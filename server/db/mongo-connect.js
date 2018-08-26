let mongoose = require('mongoose');

mongoose.Promise = global.Promise;

module.exports = function(oAppEnv){
    if(oAppEnv.isLocal === true){
        mongoose.connect('mongodb://localhost:27017/shoppingCart');
    }
    else{
        mongoose.connect(oAppEnv.services.mongodb[0].credentials.uri);
    }
}