const { User } = require("../models");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const mailer = require("../utils/nodemailer");

const login = async (req, res) => {
  try {
    const dbUser = await User.findOne({
      where: {
        email: req.body.email,
      },
    });
    if (!dbUser) {
      return res.status(403).json({ err: "invalid email" });
    }
    if (bcrypt.compareSync(req.body.password, dbUser.password)) {
      const token = jwt.sign(
        {
          email: dbUser.email,
          id: dbUser.id,
        },
        // LOCAL:
        // "porttownsend",

        // DELPOYED:
        process.env.JWT_SECRET,
        {
          expiresIn: "6h",
        }
      );
      res.json({
        token: token,
        user: dbUser,
      });
    } else {
      res.status(403).json({ err: "invalid password" });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
};

const checkToken = async (req, res) => {
  const token = req.headers?.authorization?.split(" ").pop();
  jwt.verify(token, process.env.JWT_SECRET, async (err, data) => {
    if (err) {
      console.log(err);
      const data = {
        err: "Token has expired",
      };
      res.status(403).json(data);
    } else {
      const user = await User.findByPk(data.id);
      console.log(user);
      res.json(user);
    }
  });
};

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
      individualHooks: true,
    });
    if (!updatedUser) {
      res.status(404).json({ msg: "No user with that ID" });
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

// const sendEmail = async (req, res) => {
//   console.log("send email");
//   try {
//     const response = await mailer.send({
//       to: "henryweigand10@gmail.com",
//       from: "henryweigand10@gmail.com",
//       subject: `loranscruggs.com: New Message from ${req.body.name}`,
//       html: `<div>
// <h3>From: <span style={{fontStyle: "italic"}}>${req.body.name}</span></h3>
// <h3>Email: <span style={{fontStyle: "italic"}}>${req.body.email}</span></h3>
// <h3>Phone: <span style={{fontStyle: "italic"}}>${req.body.phone}</span></h3>
// <br/>
// <h3>Message Body:</h3>
// <p style={{fontStyle: "italic"}}>${req.body.message}</p>
// </div>`,
//     });
//     console.log(response);
//     res.status(200).json(response);
//   } catch (err) {
//     console.log(err);
//     res.status(500).json(err);
//   }
// };

module.exports = {
  login,
  checkToken,
  getAllUser,
  getSingleUser,
  createUser,
  updateUser,
  deleteUser,
  sendEmail,
};
