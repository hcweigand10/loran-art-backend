const Sequelize = require("sequelize");
require("dotenv").config();

let sequelize;

sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    port: 3306,
    host: process.env.DB_HOST,
    dialect: "mysql",
  }
);


module.exports = sequelize;


// const uri2 =
//   "mysql://dkiihr6wvz4gflhp:p7w3o3evbmt8xjxv@ohunm00fjsjs1uzy.cbetxkdyhwsb.us-east-1.rds.amazonaws.com:3306/um25yozm7dwasvhq";
// const uri = `mysql://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:3306/${process.env.DB_NAME}`;

// console.log(uri);
// sequelize = new Sequelize(uri2);