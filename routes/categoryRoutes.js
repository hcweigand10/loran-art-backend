const router = require('express').Router();
const {getAllCategory, getSingleCategoryById, getSingleCategoryByName, createCategory, updateCategory, deleteCategory, seedCategories} = require("../controllers/categoryController")


router.route("/").get(getAllCategory).post(createCategory)
router.route("/seed").post(seedCategories)
router.route("/:id").get(getSingleCategoryById).put(updateCategory).delete(deleteCategory)
router.route("/byname/:name").get(getSingleCategoryByName)


module.exports = router;
