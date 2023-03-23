const { Art } = require("../models");

const getAllArt = async (req, res) => {
  console.log("get all art request");
  try {
    const allArt = await Art.findAll();
    res.status(200).json(allArt);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
};

const getSingleArt = async (req, res) => {
  console.log("get single art request");
  try {
    const singleArt = await Art.findByPk(req.params.id);
    if (!singleArt) {
      res.status(404).json({ message: "No art found with this id!" });
      return;
    }
    res.status(200).json(singleArt);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
};

const createArt = async (req, res) => {
  console.log("createArt request");
  try {
    const newArt = await Art.create(req.body);
    res.status(200).json(newArt);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
};

const updateArt = async (req, res) => {
  console.log("updateArt request");
  try {
    const updatedArt = await Art.update(req.body, {where: {id: req.params.id}});
    res.status(200).json(updatedArt);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
};

const deleteArt = async (req, res) => {
  console.log("deleteArt request");
  try {
    const foundArt = await Art.findByPk(req.params.id);
    if (foundArt) {
      const deletedArt = await Art.destroy({ where: { id: req.params.id } });
      res.status(200).json(deletedArt);
    } else {
      res.status(404).json({msg: "No art with that ID!"})
    }
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
};

module.exports = { getAllArt, getSingleArt, createArt, updateArt, deleteArt };
