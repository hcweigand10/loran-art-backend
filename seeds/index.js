const {Tag, Category, Art, User} = require("../models")
const sequelize = require('../config/connection');
const data =  require("./seedData")

const categories = [
  {name: "Wall Art"},
  {name: "Sculptures"},
  {name: "Toys"},
  {name: "Whistles"},
  {name: "Planes"},
  {name: "Wholesale"},

]

const tags = [
  {name: "Nature"},
  {name: "Water"},
  {name: "Insects"},
  {name: "Trees"},
  {name: "Animals"},
]

const users = [
  {
    name: "Henry",
    email: "henryweigand10@gmail.com",
    password: "password"
  },
  {
    name: "Loran",
    email: "loranscruggs8@gmail.com",
    password: "password"
  }
]

const seedTags = async () => {
  try {
    await Tag.bulkCreate(tags)
    console.log("Tags seeded")
  } catch (error) {
    console.error(error)
  }
}

const seedCategories = async () => {
  try {
    await Category.bulkCreate(categories)
    console.log("Categories seeded")
  } catch (error) {
    console.error(error)
  }
}

const seedArt = async () => {
  try {
    await Art.bulkCreate(data)
    console.log("Art seeded")
  } catch (error) {
    console.error(error)
  }
}

const seedUsers = async () => {
  try {
    await User.bulkCreate(users, {individualHooks: true})
    console.log("Users seeded")
  } catch (error) {
    console.error(error)
  }
}

const init = async () => {
  await sequelize.sync({force:true})
  await seedCategories()
  await seedTags()
  await seedArt()
  await seedUsers()
  return
}

init()

module.exports = init
