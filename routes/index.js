const router = require('express').Router();
const sequelize = require('../config/connection');
const artRoutes = require("./artRoutes")
const categoryRoutes = require("./categoryRoutes")
const tagRoutes = require("./tagRoutes")
const userRoutes = require("./userRoutes")

router.use("/art", artRoutes)
router.use("/tags", tagRoutes)
router.use("/categories", categoryRoutes)
router.use("/users", userRoutes)

router.post("/sync", async (req,res) => {
  try {
    if (req.body.confirm) {
      await sequelize.sycn({force:true})
      res.status(200).send("sync complete")
    }
  } catch (error) {
    console.log(error)
    res.status(500).json(error)
  }
})

module.exports = router