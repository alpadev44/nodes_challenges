'use strict';

const {DataTypes} = require('sequelize')

module.exports = (sequelize) => {

    const Genero = sequelize.define("Genero", {
        id: { allowNull: true, type: DataTypes.BIGINT, primaryKey: true, autoIncrement: true },
        nombre: { allowNull: true, type: DataTypes.STRING },
        imagen: { allowNull: true, type: DataTypes.STRING }
    },{
        timestamps: false,
        freezeTableName: true,
        tableName: 'Genero'
    });
  
    Genero.associate = function (models) {
        Genero.belongsTo(models.Pelicula)
    };

    return Genero;
};