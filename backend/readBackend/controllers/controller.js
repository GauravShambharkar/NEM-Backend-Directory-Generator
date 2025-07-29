const { default: axios } = require("axios");
const { userModel } = require("../Models/model");
const bcrypt = require("bcrypt");
const { user_jwt_secret } = require("../config");
const { generate_UserToken } = require("../utils");



const POST = async (req, res) => {
  const {} = req.body;
};

const PUT = async (req, res) => {
  const {} = req.body;
};

const DELETE = async (req, res) => {
  const {} = req.body;
};

module.exports = {
  POST,
  PUT,
  DELETE,
};
