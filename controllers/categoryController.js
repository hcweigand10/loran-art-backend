const { Category, Art, Tag } = require("../models");
const categoryData = require("../seeds/categorySeeds")

const getAllCategory = async (req, res) => {
  console.log("get all category request");
  try {
    const allCategory = await Category.findAll({ include: [{ model: Art }] });
    res.status(200).json(allCategory);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
};

const getSingleCategoryById = async (req, res) => {
  try {
    const singleCategory = await Art.findAll({
      where: {
        CategoryId: req.params.id
      },
      include: [{ model: Tag }],
    });
    if (!singleCategory) {
      res.status(404).json({ message: "No category found with this id!" });
      return;
    }
    res.status(200).json(singleCategory);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
};

const getSingleCategoryByName = async (req, res) => {
  try {
    const singleCategory = await Category.findOne({
      where: {
        name: req.params.name,
      },
      include: [{ model: Art, include: [{model: Tag}] }],
    });
    if (!singleCategory) {
      res.status(404).json({ message: "No category found with this name!" });
      return;
    }
    console.log(singleCategory);
    res.status(200).json(singleCategory);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
};

const createCategory = async (req, res) => {
  console.log("create category request");
  try {
    const newCategory = await Category.create(req.body);
    res.status(200).json(newCategory);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
};

const updateCategory = async (req, res) => {
  console.log("update category request");
  try {
    const updatedCategory = await Category.update(req.body, {
      where: { id: req.params.id },
    });
    res.status(200).json(updatedCategory);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
};

const deleteCategory = async (req, res) => {
  console.log("delete category request");
  try {
    const deletedCategory = await Category.destroy({
      where: { id: req.params.id },
    });
    res.status(200).json(deletedCategory);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
};

const seed = async (req, res) => {
  console.log("seed categories")
  try {
    const categories = await Category.bulkCreate(categoryData)
    res.status(200).json(categories)
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
    
  }
}

module.exports = {
  getAllCategory,
  getSingleCategoryById,
  getSingleCategoryByName,
  createCategory,
  updateCategory,
  deleteCategory,
  seed
};
