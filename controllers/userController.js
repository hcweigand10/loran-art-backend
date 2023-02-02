const { User } = require("../models");

const getAllUser = async (req, res) => {
  console.log("get all user request");
  try {
    const allUser = await User.findAll();
    res.status(200).json(allUser);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
};

const getSingleUser = async (req, res) => {
  console.log("get single user request");
  try {
    const singleUser = await User.findByPk(req.params.id);
    if (!singleUser) {
      res.status(404).json({ message: "No user found with this id!" });
      return;
    }
    res.status(200).json(singleUser);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
};

const createUser = async (req, res) => {
  console.log("create user request");
  try {
    const newUser = await User.create(req.body);
    res.status(200).json(newUser);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
};

const updateUser = async (req, res) => {
  console.log("update user request");
  try {
    const updatedUser = await User.update(req.body, {where: {id: req.params.id}});
    res.status(200).json(updatedUser);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
};

const deleteUser = async (req, res) => {
  console.log("delete user request");
  try {
    const deletedUser = await User.destroy({ where: { id: req.params.id } });
    res.status(200).json(deletedUser);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
};

module.exports = { getAllUser, getSingleUser, createUser, updateUser, deleteUser };
