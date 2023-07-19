const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// create our User model
class Tag extends Model {}

Tag.init(
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    }
  },
  {
    sequelize,
    timestamps: false,
    underscored: true,
    modelName: 'Tag'
  }
);

module.exports = Tag;