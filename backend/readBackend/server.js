const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
// import getPort from "get-port";
const {} = require("./config");

mongoose.connect();

var corsOptions = {
  origin: ["http://localhost:ADD_YOUR_FRONTEND_PORT_HERE"],
  METHODS: ["GET,HEAD,PUT,PATCH,POST,DELETE"],
  Credential: true,
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
};

const { METHODS } = require("node:http");
app.use(cors(corsOptions));
app.use(express.json());

const { routeName } = require("./routes/_route");

app.use("/user", routeName);
app.use("/admin", routeName);
app.use("/course", routeName);
app.use("/delete", routeName);

const port = process.env.port || 3000;
app.listen(port, () => {
  console.log("server running successfully");
});
