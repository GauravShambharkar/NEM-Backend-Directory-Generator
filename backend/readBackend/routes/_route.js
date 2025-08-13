const express = require("express");

const routeName = express.Router();
// user route

routeName.get("/read", async (req, res) => {});
routeName.post("/post");
routeName.put("/update");
routeName.delete("/delete");

module.exports = {
  routeName,
};
