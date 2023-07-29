const router = require('express').Router();
const {getAllTag, getSingleTagById, getSingleTagByName, createTag, updateTag, deleteTag, seedTags} = require("../controllers/tagController")


router.route("/").get(getAllTag).post(createTag)
router.route("/seed").post(seedTags)
router.route("/:id").get(getSingleTagById).put(updateTag).delete(deleteTag)
router.route("/byname/:name").get(getSingleTagByName)


module.exports = router;
