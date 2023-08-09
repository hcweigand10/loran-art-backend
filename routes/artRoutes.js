const router = require('express').Router();
const {getAllArt, getSingleArt, createArt, updateArt, deleteArt, updateTags, updateTagsByMdk, seedArt, seedArtTags, createOneArtTag} = require("../controllers/artController")


router.route("/").get(getAllArt).post(createArt)
router.route("/seed").post(seedArt)
router.route("/:id").get(getSingleArt).put(updateArt).delete(deleteArt)
router.route("/tags/:id").put(updateTags)
router.route("/tags/seed").post(seedArtTags)
router.route("/tags").post(seedArtTags)
// router.route("/tags/mdk/:mdk").put(updateTagsByMdk)


module.exports = router;
