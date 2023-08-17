const { Personaje } = require('../models/personaje')

const createPersonaje = async (data) => {
    try {
        return await Personaje.create(data)
    }
    catch (err) {
        throw err
    }
};

module.exports = { createPersonaje }