// Database: Conexión con la base de datos de Chambaline.
var mongoose = require('mongoose');

var servidor = 'localhost:27017';
var db = 'chambaline';

class Database{
    constructor(){
        mongoose.connect(`mongodb://${servidor}/${db}`)
        .then(()=>{
            console.log('Conectado a la base de datos de Chambaline');
        }).catch(error=>{
            console.log(error);
        });
    }
}

module.exports = new Database();
