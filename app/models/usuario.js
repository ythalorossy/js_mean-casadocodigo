var mongoose = require('mongoose');
var findOrCreate = require('mongoose-findorcreate');

module.exports = function () {
    
    var schema = mongoose.Schema({
        login : {
            type : String,
            required : true,
            index : {
                unique : true
            }
        },
        nome : {
            type : String,
            required : true,
        },
        inclusao : {
            type : String,
            default : Date.now
        }
    });
    
    schema.plugin(findOrCreate);        // Associando plugin ao Schema
    
    return mongoose.model('Usuario', schema);
};