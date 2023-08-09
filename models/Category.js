const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// create our User model
class Category extends Model {}

Category.init(
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    }
  },
  {
    sequelize,
    timestamps: false,
    underscored: false,
    modelName: 'Category'
  }
);

module.exports = Category;