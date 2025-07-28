const { default: axios } = require("axios");
const { userModel } = require("../Models/db");
const bcrypt = require("bcrypt");
const { user_jwt_secret } = require("../config");
const { generate_UserToken } = require("../utils");

const registerUser = async (req, res) => {
  const {} = req.body;

  const user = await userModel.findOne({});

  if (user) {
    res.send({
      msg: "",
    });
  } else {
    await userModel.create({});
    res.send({
      msg: "",
    });
  }
};

const loginUser = async (req, res) => {
  const {} = req.body;

  const user = await userModel.findOne({});

  if (validPass) {
    res.send({
      msg: "",
    });
  } else {
    res.status(401).send({
      msg: "",
    });
  }
};

const user_jwtValid = (req, res) => {
  res.send({
    msg: "",
  });
};

const updateUser = async (req, res) => {
  const {  } = req.body;

  const user = await userModel.findOne({});
  if (user) {
    res.send({
      msg: "",
    });
  } else {
    res.send({
      msg: "",
    });
  }
};

const deleteUser = async (req, res) => {
  res.status(200).send({
    msg: "",
  });
};


module.exports = {
  registerUser,
  loginUser,
  user_jwtValid,
  updateUser,
  deleteUser,
};
