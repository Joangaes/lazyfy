'use strict'
let express = require('express');
let UserController = require('../controllers/user');

let api = express.Router();

api.get('/user', UserController.prueba);

module.exports = api;
