const {Tag, Category} = require("../models")

const categories = [
  {name: "Small Walls"},
  {name: "Medium Walls"},
  {name: "Large Walls"},
  {name: "Sculptures"},
  {name: "Toys"},
  {name: "Whistles"},
  // {name: ""},
]

const seedTags = () => {

}

const seedCategories = async () => {
  try {
    await Category.bulkCreate(categories)
    console.log("Categories seeded")
  } catch (error) {
    console.error(error)
  }
}

seedCategories()