
const mongoose = require("mongoose");

const controllerSchema = new mongoose.Schema({
    controllerName: {
        type: String,
        required: true,
    }
})
module.exports = { controllerSchema }