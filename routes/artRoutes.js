const router = require('express').Router();
const {getAllArt, getSingleArt, createArt, updateArt, deleteArt} = require("../controllers/artController")


router.route("/").get(getAllArt).post(createArt)
router.route("/:id").get(getSingleArt).put(updateArt).delete(deleteArt)


module.exports = router;
