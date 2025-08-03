

// const fs = require("fs");
// const path = require("path");

// const generateFiles = ({
//   tempDir,
//   controllerName,
//   middlewareName,
//   modelName,
//   routeName,
//   schemaName,
//   utilName,
// }) => {
//   const templates = {
//     controller: (name) =>
//       `exports.${name} = (req, res) => {\n  res.send("${name} controller working");\n};`,

//     middleware: (name) =>
//       `module.exports = (req, res, next) => {\n  console.log("${name} middleware running");\n  next();\n};`,

//     model: (name, schema) =>
//       `const mongoose = require("mongoose");\n\nconst ${schema} = new mongoose.Schema({\n  name: String\n});\n\nmodule.exports = mongoose.model("${name}", ${schema});`,

//     route: (name) =>
//       `const express = require("express");\nconst router = express.Router();\nconst { ${name} } = require("../controllers/${name}Controller");\n\nrouter.get("/", ${name});\n\n module.exports = router;`,

//     util: (name) =>
//       `// ${name} utility function\nmodule.exports = () => {\n  console.log("${name} util called");\n};`,
//   };

//   if (controllerName) {
//     fs.writeFileSync(
//       path.join(tempDir, "controllers", `${controllerName}Controller.js`),
//       templates.controller(controllerName)
//     );
//   }

//   if (middlewareName) {
//     fs.writeFileSync(
//       path.join(tempDir, "middlewares", `${middlewareName}Middleware.js`),
//       templates.middleware(middlewareName)
//     );
//   }

//   if (modelName && schemaName) {
//     fs.writeFileSync(
//       path.join(tempDir, "models", `${modelName}Model.js`),
//       templates.model(modelName, schemaName)
//     );
//   }

//   if (routeName) {
//     fs.writeFileSync(
//       path.join(tempDir, "routes", `${routeName}Routes.js`),
//       templates.route(routeName)
//     );
//   }

//   if (utilName) {
//     fs.writeFileSync(
//       path.join(tempDir, "utils", `${utilName}.js`),
//       templates.util(utilName)
//     );
//   }
// };

// module.exports = { generateFiles };
