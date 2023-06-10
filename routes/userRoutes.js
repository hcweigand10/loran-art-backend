const router = require('express').Router();
const {login, checkToken, getAllUser, getSingleUser, createUser, updateUser, deleteUser} = require("../controllers/userController")


router.route("/").get(getAllUser)
router.route("/:id").get(getSingleUser).put(updateUser).delete(deleteUser)
router.route("/login").post(login)
router.route("/check-token").post(checkToken)


module.exports = router;
