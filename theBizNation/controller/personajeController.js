const {createPersonaje} = require('../service/personajeService')

const createPersonajeController = async (req, res) => {
    try {
        const personaje = await createPersonaje(req.body)
        return res.status(201).json(personaje)
    }
    catch (err) {
        return res.status(400).json({ err: err.message })
    }
};

module.exports = { createPersonajeController }