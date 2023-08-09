const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// create our User model
class ArtTag extends Model {}

ArtTag.init(
  {
    
  },
  {
    sequelize,
    timestamps: false,
    underscored: false,
    modelName: 'ArtTag'
  }
);

module.exports = ArtTag;