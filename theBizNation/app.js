const express = require('express');
const db = require('./models/index');
const app = express();
const routerPersonaje = require('./routes/index.routes')
const PORT = process.env.PORT || 3000;

app.use(express.json())

app.use('/character', routerPersonaje)

db.sequelize
    .authenticate()
    .then(() => {
        console.log("Conexión a la base de datos establecida con éxito");
        db.sequelize.sync({ force: true }).then(() => {
            app.listen(PORT, () => {
                console.log(`Servidor corriendo en http://localhost:${PORT}`);
            });
        });
    })
    .catch(err => {
        console.error("No se pudo conectar a la base de datos:", err);
    });
