const bodyParser = require("body-parser");
const fs = require("fs-extra");
const path = require("path");
const archiver = require("archiver");

app.post("/generate", async (req, res) => {
  const {
    directoryName,
    controllerFolderName,
    controllerFileName,
    middlewareFolderName,
    middlewareFileName,
    modelFolderName,
    modelFileName,
    routeFolderName,
    routeFileName,
    schemaFolderName,
    schemaFileName,
    utilFolderName,
    utilFileName,
  } = req.body;

  if (!directoryName) {
    return res
      .status(400)
      .json({ error: "Folder name and file name are required" });
  }

  try {
    const archive = archiver("zip", { zlib: { level: 9 } });

    const output = fs.createWriteStream(__dirname + `/${directoryName}.zip`);
    archive.pipe(output);

    const controller_fileContent = fs.readFileSync(
      path.join(__dirname, "../readBackend/controllers/controler.js")
    );
    archive.append(controller_fileContent, {
      name: `${directoryName}/${controllerFolderName}/${controllerFileName}.js`,
    });

    const middleware_fileContent = fs.readFileSync(
      path.join(__dirname, "../readBackend/middlewares/middleware.js")
    );
    archive.append(middleware_fileContent, {
      name: `${directoryName}/${middlewareFolderName}/${middlewareFileName}.js`,
    });

    const model_fileContent = fs.readFileSync(
      path.join(__dirname, "../readBackend/models/model.js")
    );
    archive.append(model_fileContent, {
      name: `${directoryName}/${modelFolderName}/${modelFileName}.js`,
    });

    const schema_fileContent = fs.readFileSync(
      path.join(__dirname, "../readBackend/models/schemas/schema.js")
    );
    archive.append(schema_fileContent, {
      name: `${directoryName}/${modelFolderName}/${schemaFolderName}/${schemaFileName}.js`,
    });

    const route_fileContent = fs.readFileSync(
      path.join(__dirname, "../readBackend/routes/_route.js")
    );
    archive.append(route_fileContent, {
      name: `${directoryName}/${routeFolderName}/${routeFileName}.js`,
    });

    // util.js file content
    const util_fileContent = fs.readFileSync(
      path.join(__dirname, "../readBackend/utils.js")
    );
    archive.append(util_fileContent, {
      name: `${directoryName}/${utilFolderName}/${utilFileName}.js`,
    });

    // package.json content
    const package_jsonContent = fs.readFileSync(
      path.join(__dirname, "../readBackend/package.json")
    );
    archive.append(package_jsonContent, {name: `${directoryName}/package.json`});

    // package-lock.json content
    const package_lock_jsonContent = fs.readFileSync(
      path.join(__dirname, "../readBackend/package-lock.json")
    );archive.append(package_lock_jsonContent,{name: `${directoryName}/package-lock.json`} )

    await archive.finalize();
  } catch (err) {
    console.error("Error generating ZIP file:", err);
    res.status(500).json({ error: "Error generating file." });
  }
});
