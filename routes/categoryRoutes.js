const router = require('express').Router();
const {getAllCategory, getSingleCategory, createCategory, updateCategory, deleteCategory} = require("../controllers/categoryController")


router.route("/").get(getAllCategory).post(createCategory)
router.route("/:id").get(getSingleCategory).put(updateCategory).delete(deleteCategory)


module.exports = router;
