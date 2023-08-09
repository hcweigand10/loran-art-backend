const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// create our User model
class Art extends Model {}

Art.init(
  {
    mdk: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    height: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    width: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    depth: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    price: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    size: {
      type: DataTypes.STRING,
      allowNull: true
    },
    web: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    image: {
      type: DataTypes.STRING,
      allowNull: true
    },
    notes: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    hours: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    old_price: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    date_created: {
      type: DataTypes.STRING,
      allowNull: true
    },
    web_sort: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    link_url: {
      type: DataTypes.STRING,
      allowNull: true
    },
    link_text: {
      type: DataTypes.STRING,
      allowNull: true
    },
    location: {
      type: DataTypes.STRING,
      allowNull: true
    },
    sold: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    sold_date: {
      type: DataTypes.STRING,
      allowNull: true
    },
    sold_location: {
      type: DataTypes.STRING,
      allowNull: true
    },
    history: {
      type: DataTypes.STRING,
      allowNull: true
    },
  },
  {
    sequelize,
    timestamps: false,
    underscored: false,
    modelName: 'Art'
  }
);

module.exports = Art;