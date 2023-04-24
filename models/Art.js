const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// create our User model
class Art extends Model {}

Art.init(
  {
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description: {
      type: DataTypes.STRING,
      allowNull: true
    },
    height: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    width: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    thickness: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    price: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    forSale: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    image: {
      type: DataTypes.STRING,
      allowNull: false
    },
    notes: {
      type: DataTypes.STRING,
      allowNull: true
    }
    
  },
  {
    sequelize,
    timestamps: false,
    underscored: true,
    modelName: 'Art'
  }
);

module.exports = Art;