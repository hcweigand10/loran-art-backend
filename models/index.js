const Art = require("./Art")
const Category = require("./Category")
const Tag = require("./Tag")
const User = require("./User")
const ArtTag = require("./ArtTag")

Art.belongsTo(Category)
Category.hasMany(Art)

Art.belongsToMany(Tag, {through: ArtTag})
Tag.belongsToMany(Art, {through: ArtTag})

module.exports = {Art, Category, User, Tag, ArtTag}