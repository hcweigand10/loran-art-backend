const { User } = require("../models");
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken");

const login = async (req, res) => {
  console.log("Login attempt");
  try {
    const dbUser = await User.findOne({
      where: {
        email: req.body.email,
      },
    });
    if(!dbUser){
      return res.status(403).json({err:"invalid email"})
  } 
  if (bcrypt.compareSync(req.body.password, dbUser.password)) {
      const token = jwt.sign(
        {
          email: dbUser.email,
          id: dbUser.id
        },
        // LOCAL:
        // "porttownsend",

        // DELPOYED:
        process.env.JWT_SECRET,
        {
          expiresIn: "6h"
        }
      );
      res.json({ 
          token: token, 
          user: dbUser
      });
    } else {
      res.status(403).json({err: "invalid password"});
    }
    
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
};

const checkToken = async (req, res) => {
  const token = req.headers?.authorization?.split(" ").pop()
    jwt.verify(token, process.env.JWT_SECRET, async (err, data) => {
        if (err) {
            console.log(err);
            const data = {
              err: "Token has expired"
            }
            res.status(403).json(data);
          } else {
            const user = await User.findByPk(data.id)
            console.log(user)  
            res.json(user);
          }
    })
}

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
    const updatedUser = await User.update(req.body, {
      where: { id: req.params.id },
      individualHooks: true
    });
    if (!updatedUser) {
      res.status(404).json({msg: "No user with that ID"})
    }
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

module.exports = {
  login,
  checkToken,
  getAllUser,
  getSingleUser,
  createUser,
  updateUser,
  deleteUser,
};
