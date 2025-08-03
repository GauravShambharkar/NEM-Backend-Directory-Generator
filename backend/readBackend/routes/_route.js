const express = require("express");

const routeName1 = express.Router();
const routeName2 = express.Router();
const routeName3 = express.Router();
const routeName4 = express.Router();
// user route

routeName1.get("/read", async (req, res) => {});
routeName2.post("/post");
routeName3.put("/update");
routeName4.delete("/delete");

module.exports = {
  routeName1,
  routeName2,
  routeName3,
  routeName4,
};
