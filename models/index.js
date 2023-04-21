const Art = require("./Art")
const Category = require("./Category")
const Tag = require("./Tag")
const User = require("./User")

Art.belongsTo(Category)
Category.hasMany(Art)

Art.belongsToMany(Tag, {through: "art_tags"})
Tag.belongsToMany(Art, {through: "art_tags"})

module.exports = {Art, Category, User, Tag}