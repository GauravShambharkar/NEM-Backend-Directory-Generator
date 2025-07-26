const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const fs = require("fs-extra");
const path = require("path");
const archiver = require("archiver");

const app = express();
app.use(cors());
app.use(bodyParser.json());

const { generateFiles } = require('../index')

app.post("/generate", async (req, res) => {
  const { controllerName, middlewareName, modelName, routeName, schemaName, utilName } = req.body;

  const timeTag = Date.now();
  const tempDir = path.join(__dirname, `../output/backend-${timeTag}`);
  const zipPath = path.join(__dirname, `../output/backend-${timeTag}.zip`);

  try {
    await fs.copy(path.join(__dirname, "../template"), tempDir);

    generateFiles({ tempDir, controllerName, middlewareName, modelName, routeName, schemaName, utilName });

    const output = fs.createWriteStream(zipPath);
    const archive = archiver("zip");
    archive.pipe(output);
    archive.directory(tempDir, false);
    await archive.finalize();

    output.on("close", () => {
      res.download(zipPath, "backend.zip");
    });
  } catch (err) {
    console.error(err);
    res.status(500).send("Failed to generate backend.");
  }
});

app.listen(4000, () => console.log("Backend server running on port 4000"));
