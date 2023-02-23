const router = require('express').Router();
const {getAllCategory, getSingleCategoryById, getSingleCategoryByName, createCategory, updateCategory, deleteCategory} = require("../controllers/categoryController")


router.route("/").get(getAllCategory).post(createCategory)
router.route("/:id").get(getSingleCategoryById).put(updateCategory).delete(deleteCategory)
router.route("/:name").get(getSingleCategoryByName)


module.exports = router;
