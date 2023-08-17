const express = require('express');
const personajeController = require('../controller/personajeController')

const routerPersonaje = express.Router()

routerPersonaje.post('/createCharacter', personajeController.createPersonajeController)

module.exports = routerPersonaje