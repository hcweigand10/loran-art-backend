const Art = require("./Art")
const Category = require("./Category")
const User = require("./User")

Art.belongsTo(Category)
Category.hasMany(Art)

module.exports = {Art, Category, User}