'use strict';
const {DataTypes} = require('sequelize')

module.exports = (sequelize) => {

    const Personaje = sequelize.define("Personaje", {
        id: { allowNull: true, type: DataTypes.BIGINT, primaryKey: true, autoIncrement: true },
        imagen: { allowNull: true, type: DataTypes.STRING },
        nombre: { allowNull: true, type: DataTypes.STRING },
        edad: { allowNull: true, type: DataTypes.INTEGER },
        historia: { allowNull: true, type: DataTypes.STRING }
    },
    {
        timestamps: false,
        freezeTableName: true,
        tableName: 'Personaje'
    });
    
    Personaje.associate = function (models) {
        Personaje.belongsToMany(models.Pelicula, { through: 'Personaje_Pelicula' });
    };

    return Personaje;
};
