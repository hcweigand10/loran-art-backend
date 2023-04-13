const router = require('express').Router();
const artRoutes = require("./artRoutes")
const categoryRoutes = require("./categoryRoutes")
const tagRoutes = require("./tagRoutes")
const userRoutes = require("./userRoutes")

router.use("/art", artRoutes)
router.use("/tags", tagRoutes)
router.use("/categories", categoryRoutes)
router.use("/users", userRoutes)

module.exports = router