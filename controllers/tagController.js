const sequelize = require("../config/connection");
const { Tag, Art } = require("../models");

const getAllTag = async (req, res) => {
  console.log("get all tag request");
  try {
    // const allTag = await Tag.findAll({ include: [{ model: Art }] });
    const allTag = await Tag.findAll();
    res.status(200).json(allTag);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
};

const getSingleTagById = async (req, res) => {
  try {
    const singleTag = await Tag.findByPk(req.params.id, {
      include: [{ model: Art }],
    });
    if (!singleTag) {
      res.status(404).json({ message: "No tag found with this id!" });
      return;
    }
    res.status(200).json(singleTag);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
};

const getSingleTagByName = async (req, res) => {
  try {
    const singleTag = await Tag.findOne({
      where: {
        name: req.params.name,
      },
      include: [{ model: Art }],
    });
    if (!singleTag) {
      res.status(404).json({ message: "No tag found with this name!" });
      return;
    }
    console.log(singleTag);
    res.status(200).json(singleTag);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
};

const checkForTag = async (req, res) => {
  try {
    const singleTag = await Tag.findOne({
      where: {
        name: req.params.name,
      },
    });
    if (!singleTag) {
      res.status(200).json({ exists: false });
      return;
    } else {
      res.status(200).json({ exists: true, tagId: singleTag.id });
      return;
    }
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
};

const createTag = async (req, res) => {
  console.log("create tag request");
  try {
    const newTag = await Tag.create(req.body);
    res.status(200).json(newTag);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
};

const updateTag = async (req, res) => {
  console.log("update tag request");
  try {
    const updatedTag = await Tag.update(req.body, {
      where: { id: req.params.id },
    });
    res.status(200).json(updatedTag);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
};

const deleteTag = async (req, res) => {
  console.log("delete tag request");
  try {
    const deletedTag = await Tag.destroy({
      where: { id: req.params.id },
    });
    res.status(200).json(deletedTag);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
};

const seedTags = async (req,res) => {
  console.log("seed tag request");
  try {
    if (req.body.tags.length > 0) {
      await sequelize.query("SET FOREIGN_KEY_CHECKS = 0");
      await sequelize.query("TRUNCATE TABLE tags");
      await sequelize.query("TRUNCATE TABLE tags");
      await sequelize.query("SET FOREIGN_KEY_CHECKS = 1");
      const tags = await Tag.bulkCreate(req.body.tags);
      res.status(200).json(tags);
    } else {
      res.status(500).json({ msg: "no data" });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
}

module.exports = {
  getAllTag,
  getSingleTagById,
  getSingleTagByName,
  checkForTag,
  createTag,
  updateTag,
  deleteTag,
  seedTags
};
