const jwt = require("jsonwebtoken");
const { user_jwt_secret } = require("./config");

const generate_UserToken = (payload) => {
  return jwt.sign(payload, user_jwt_secret);
};

const verify_UserToken = (token) => {
  try {
    return jwt.verify(token, user_jwt_secret);
  } catch (error) {
    return null;
  }
};


module.exports = {
  generate_UserToken,
  verify_UserToken,

};
