const mongoose = require("mongoose");

const { userSchema } = require("./schemas/schema");

const modelName = mongoose.model("user", userSchema);

module.exports = {
  modelName,
};
