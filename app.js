'use strict'

let express = require('express');
let bodyParser = require('body-parser');

let app = express();

//Cargar rutas

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

//Configurar cabecer http

//Crear las rutas base

module.exports = app;
