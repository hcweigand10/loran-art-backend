const router = require('express').Router();
const {getAllCategory, getSingleCategoryById, getSingleCategoryByName, createCategory, updateCategory, deleteCategory, seed} = require("../controllers/categoryController")


router.route("/").get(getAllCategory).post(createCategory)
router.route("/seed").post(seed)
router.route("/:id").get(getSingleCategoryById).put(updateCategory).delete(deleteCategory)
router.route("/byname/:name").get(getSingleCategoryByName)


module.exports = router;
