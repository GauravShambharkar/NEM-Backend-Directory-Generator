const mongoose = require("mongoose");
const { controllerSchema } = require("./schemas/controllerSchema");

const controllerModel = mongoose.Model("Controller", controllerSchema);

module.exports = { controllerModel };
