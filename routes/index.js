const router = require('express').Router();
const artRoutes = require("./artRoutes")
const categoryRoutes = require("./categoryRoutes")
const userRoutes = require("./userRoutes")

router.use("/art", artRoutes)
router.use("/categories", categoryRoutes)
router.use("/users", userRoutes)

module.exports = router