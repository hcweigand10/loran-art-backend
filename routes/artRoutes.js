const router = require('express').Router();
const {getAllArt, getSingleArt, createArt, updateArt, deleteArt, updateTags, seedArt} = require("../controllers/artController")


router.route("/").get(getAllArt).post(createArt)
router.route("/seed").post(seedArt)
router.route("/:id").get(getSingleArt).put(updateArt).delete(deleteArt)
router.route("/tags/:id").put(updateTags)


module.exports = router;
