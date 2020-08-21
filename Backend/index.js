var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');
var database = require('./modules/database');

var app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Inclusión de routers.
const register = require("./routes/register");
const datadb = require("./routes/datadb");
const login = require("./routes/login");

app.use("/api/register", register);
app.use("/api/datadb", datadb);
app.use("/api/login", login);
// Fin de la inclusión de routers.




// Definición de middlewares.



// Fin de las definiciones de middlewares.

app.listen(8888, function(){
    console.log('Servidor del backend levantado en el puerto 8888');
});
