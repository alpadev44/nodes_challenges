'use strict';

const {DataTypes} = require('sequelize')

module.exports = (sequelize) => {
    const Pelicula = sequelize.define("Pelicula", {
        id: { allowNull: true, type: DataTypes.BIGINT, primaryKey: true, autoIncrement: true },
        titulo: { allowNull: true, type: DataTypes.STRING },
        fechaDeCreacion: { allowNull: true, type: DataTypes.DATE },
        calificacion: { allowNull: true, type: DataTypes.INTEGER, validate: { min: 1, max: 5 } },
    },{
        timestamps: false,
        freezeTableName: true,
        tableName: 'Pelicula'
    });
   

    Pelicula.associate = function (models) {
        Pelicula.belongsToMany(models.Personaje, { through: 'Personaje_Pelicula' });
       //Pelicula.hasMany(models.Genero ,{ foreignKey: "pelicula_id" }); Relacion Bidireciconal
    };

    return Pelicula;
};

