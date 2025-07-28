const fs = require("fs-extra");
const path = require("path");
const archiver = require("archiver");

const { Router } = require("express");
const generateRoute = Router();

generateRoute.post("/generate", async (req, res) => {
  const {
    directoryName,
    controllerFileName,
    middlewareFileName,
    modelFileName,
    routeFileName,
    schemaFileName,
    utilFileName,
  } = req.body;

  if (!directoryName) {
    return res
      .status(400)
      .json({ error: "Folder name and file name are required" });
  }

  try {
    const archive = archiver("zip", { zlib: { level: 9 } });

    res.set({
      "Content-Type": "application/zip",
      "Content-Disposition": `attachment; filename=${directoryName}.zip`,
    });

    // Pipe the archive directly to the response only
    archive.pipe(res);

    // Add controller files
    if (
      controllerFileName &&
      fs.existsSync(
        path.join(__dirname, "../readBackend/controllers/controller.js")
      )
    ) {
      const controllerFileNames = controllerFileName.split(",");
      const controller_fileContent = fs.readFileSync(
        path.join(__dirname, "../readBackend/controllers/controller.js")
      );

      controllerFileNames.forEach((fileName) => {
        archive.append(controller_fileContent, {
          name: `${directoryName}/controllers/${fileName.trim()}.js`,
        });
      });
    }

    // Add middleware files
    if (
      middlewareFileName &&
      fs.existsSync(
        path.join(__dirname, "../readBackend/middleware/middleware.js")
      )
    ) {
      const middlewareFileNames = middlewareFileName.split(",");
      const middleware_fileContent = fs.readFileSync(
        path.join(__dirname, "../readBackend/middleware/middleware.js")
      );

      middlewareFileNames.forEach((fileName) => {
        archive.append(middleware_fileContent, {
          name: `${directoryName}/middleware/${fileName.trim()}.js`,
        });
      });
    }

    // Add model files
    if (
      modelFileName &&
      fs.existsSync(path.join(__dirname, "../readBackend/Models/model.js"))
    ) {
      const modelFileNames = modelFileName.split(",");
      const model_fileContent = fs.readFileSync(
        path.join(__dirname, "../readBackend/Models/model.js")
      );

      modelFileNames.forEach((fileName) => {
        archive.append(model_fileContent, {
          name: `${directoryName}/Models/${fileName.trim()}.js`,
        });
      });
    }

    // Add schema files
    if (
      schemaFileName &&
      fs.existsSync(
        path.join(__dirname, "../readBackend/Models/schemas/schema.js")
      )
    ) {
      const schemaFileNames = schemaFileName.split(",");
      const schema_fileContent = fs.readFileSync(
        path.join(__dirname, "../readBackend/Models/schemas/schema.js")
      );

      schemaFileNames.forEach((fileName) => {
        archive.append(schema_fileContent, {
          name: `${directoryName}/Models/schemas/${fileName.trim()}.js`,
        });
      });
    }

    // Add route files
    if (
      routeFileName &&
      fs.existsSync(path.join(__dirname, "../readBackend/routes/_route.js"))
    ) {
      const routeFileNames = routeFileName.split(",");
      const route_fileContent = fs.readFileSync(
        path.join(__dirname, "../readBackend/routes/_route.js")
      );

      routeFileNames.forEach((fileName) => {
        archive.append(route_fileContent, {
          name: `${directoryName}/routes/${fileName.trim()}.js`,
        });
      });
    }

    // Add utility files
    if (
      utilFileName &&
      fs.existsSync(path.join(__dirname, "../readBackend/utils.js"))
    ) {
      const utilFileNames = utilFileName.split(",");
      const util_fileContent = fs.readFileSync(
        path.join(__dirname, "../readBackend/utils.js")
      );

      utilFileNames.forEach((fileName) => {
        archive.append(util_fileContent, {
          name: `${directoryName}/utils/${fileName.trim()}.js`,
        });
      });
    }

    // package.json content
    if (fs.existsSync(path.join(__dirname, "../readBackend/package.json"))) {
      const package_jsonContent = fs.readFileSync(
        path.join(__dirname, "../readBackend/package.json")
      );
      archive.append(package_jsonContent, {
        name: `${directoryName}/package.json`,
      });
    }

    // package-lock.json content
    if (
      fs.existsSync(path.join(__dirname, "../readBackend/package-lock.json"))
    ) {
      const package_lock_jsonContent = fs.readFileSync(
        path.join(__dirname, "../readBackend/package-lock.json")
      );
      archive.append(package_lock_jsonContent, {
        name: `${directoryName}/package-lock.json`,
      });
    }

    // node_modules content
    const nodeModuleDir = path.join(__dirname, "../node_modules");
    if (fs.existsSync(nodeModuleDir)) {
      archive.directory(nodeModuleDir, `${directoryName}/node_modules`);
    }

    // config.js content
    if (fs.existsSync(path.join(__dirname, "../readBackend/config.js"))) {
      const config_fileContent = fs.readFileSync(
        path.join(__dirname, "../readBackend/config.js")
      );
      archive.append(config_fileContent, {
        name: `${directoryName}/config.js`,
      });
    }

    await archive.finalize();

    console.log(
      `ZIP file generated successfully for directory: ${directoryName}`
    );
  } catch (err) {
    console.error("Error generating ZIP file:", err);
    res.status(500).json({ error: "Error generating file." });
  }
});

module.exports = { generateRoute };
