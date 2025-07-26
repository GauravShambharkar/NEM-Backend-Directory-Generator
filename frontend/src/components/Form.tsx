import { useState } from "react";
import { Plus, Trash2, Download, Code } from "lucide-react";

function App() {
  // Start with one empty field for each type
  const [controllerNames, setControllerNames] = useState([""]);
  const [middlewareNames, setMiddlewareNames] = useState([""]);
  const [modelNames, setModelNames] = useState([""]);
  const [routeNames, setRouteNames] = useState([""]);
  const [schemaNames, setSchemaNames] = useState([""]);
  const [utilNames, setUtilNames] = useState([""]);

  // Function to add a new controller field
  function addControllerField() {
    const newList = [...controllerNames, ""];
    setControllerNames(newList);
  }

  // Function to add a new middleware field
  function addMiddlewareField() {
    const newList = [...middlewareNames, ""];
    setMiddlewareNames(newList);
  }

  // Function to add a new model field
  function addModelField() {
    const newList = [...modelNames, ""];
    setModelNames(newList);
  }

  // Function to add a new route field
  function addRouteField() {
    const newList = [...routeNames, ""];
    setRouteNames(newList);
  }

  // Function to add a new schema field
  function addSchemaField() {
    const newList = [...schemaNames, ""];
    setSchemaNames(newList);
  }

  // Function to add a new util field
  function addUtilField() {
    const newList = [...utilNames, ""];
    setUtilNames(newList);
  }

  // Function to remove a controller field
  function removeControllerField(indexToRemove: number) {
    if (controllerNames.length > 1) {
      const newList = controllerNames.filter(
        (item: string, index: number) => index !== indexToRemove
      );
      setControllerNames(newList);
    }
  }

  // Function to remove a middleware field
  function removeMiddlewareField(indexToRemove: number) {
    if (middlewareNames.length > 1) {
      const newList = middlewareNames.filter(
        (item: string, index: number) => index !== indexToRemove
      );
      setMiddlewareNames(newList);
    }
  }

  // Function to remove a model field
  function removeModelField(indexToRemove: number) {
    if (modelNames.length > 1) {
      const newList = modelNames.filter(
        (item: string, index: number) => index !== indexToRemove
      );
      setModelNames(newList);
    }
  }

  // Function to remove a route field
  function removeRouteField(indexToRemove: number) {
    if (routeNames.length > 1) {
      const newList = routeNames.filter(
        (item: string, index: number) => index !== indexToRemove
      );
      setRouteNames(newList);
    }
  }

  // Function to remove a schema field
  function removeSchemaField(indexToRemove: number) {
    if (schemaNames.length > 1) {
      const newList = schemaNames.filter(
        (item: string, index: number) => index !== indexToRemove
      );
      setSchemaNames(newList);
    }
  }

  // Function to remove a util field
  function removeUtilField(indexToRemove: number) {
    if (utilNames.length > 1) {
      const newList = utilNames.filter(
        (item: string, index: number) => index !== indexToRemove
      );
      setUtilNames(newList);
    }
  }

  // Function to update a controller name
  function updateControllerName(index: number, newValue: string) {
    const newList = [...controllerNames];
    newList[index] = newValue;
    setControllerNames(newList);
  }

  // Function to update a middleware name
  function updateMiddlewareName(index: number, newValue: string) {
    const newList = [...middlewareNames];
    newList[index] = newValue;
    setMiddlewareNames(newList);
  }

  // Function to update a model name
  function updateModelName(index: number, newValue: string) {
    const newList = [...modelNames];
    newList[index] = newValue;
    setModelNames(newList);
  }

  // Function to update a route name
  function updateRouteName(index: number, newValue: string) {
    const newList = [...routeNames];
    newList[index] = newValue;
    setRouteNames(newList);
  }

  // Function to update a schema name
  function updateSchemaName(index: number, newValue: string) {
    const newList = [...schemaNames];
    newList[index] = newValue;
    setSchemaNames(newList);
  }

  // Function to update a util name
  function updateUtilName(index: number, newValue: string) {
    const newList = [...utilNames];
    newList[index] = newValue;
    setUtilNames(newList);
  }

  // Function to generate and download the backend
  function generateBackend() {
    // Collect all the data
    const allData = {
      controllers: controllerNames.filter((name) => name.trim() !== ""),
      middlewares: middlewareNames.filter((name) => name.trim() !== ""),
      models: modelNames.filter((name) => name.trim() !== ""),
      routes: routeNames.filter((name) => name.trim() !== ""),
      schemas: schemaNames.filter((name) => name.trim() !== ""),
      utils: utilNames.filter((name) => name.trim() !== ""),
    };

    console.log("Generating backend with:", allData);

    // Simulate file download
    const fakeFile = new Blob(["Backend files would be here"], {
      type: "application/zip",
    });
    const downloadLink = document.createElement("a");
    downloadLink.href = window.URL.createObjectURL(fakeFile);
    downloadLink.download = "backend.zip";
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  }

  return (
    <div className="min-h-screen bg-white py-8 px-4">
      <div className="max-w-2xl mx-auto">
        {/* Title */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-black mb-2">
            Backend Generator
          </h1>
          <p className="text-gray-600">
            Generate your backend structure with custom components
          </p>
        </div>

        {/* Main Form */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="space-y-6">
            {/* Controller Section */}
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Code className="w-4 h-4 text-gray-600" />
                <label className="text-sm font-medium text-black">
                  Controller Names
                </label>
              </div>
              <div className="space-y-2">
                {controllerNames.map((name, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <input
                      type="text"
                      value={name}
                      onChange={(e) =>
                        updateControllerName(index, e.target.value)
                      }
                      placeholder="Enter controller name..."
                      className="flex-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm text-sm
                                 placeholder:text-gray-400 focus:outline-none focus:ring-2 
                                 focus:ring-black focus:border-black transition-colors"
                    />
                    <button
                      onClick={addControllerField}
                      className="p-2 text-black hover:text-gray-700 hover:bg-gray-100 
                                 rounded-md transition-colors border border-gray-300"
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                    {controllerNames.length > 1 && (
                      <button
                        onClick={() => removeControllerField(index)}
                        className="p-2 text-black hover:text-gray-700 hover:bg-gray-100 
                                   rounded-md transition-colors border border-gray-300"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Middleware Section */}
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Code className="w-4 h-4 text-gray-600" />
                <label className="text-sm font-medium text-black">
                  Middleware Names
                </label>
              </div>
              <div className="space-y-2">
                {middlewareNames.map((name, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <input
                      type="text"
                      value={name}
                      onChange={(e) =>
                        updateMiddlewareName(index, e.target.value)
                      }
                      placeholder="Enter middleware name..."
                      className="flex-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm text-sm
                                 placeholder:text-gray-400 focus:outline-none focus:ring-2 
                                 focus:ring-black focus:border-black transition-colors"
                    />
                    <button
                      onClick={addMiddlewareField}
                      className="p-2 text-black hover:text-gray-700 hover:bg-gray-100 
                                 rounded-md transition-colors border border-gray-300"
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                    {middlewareNames.length > 1 && (
                      <button
                        onClick={() => removeMiddlewareField(index)}
                        className="p-2 text-black hover:text-gray-700 hover:bg-gray-100 
                                   rounded-md transition-colors border border-gray-300"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Model Section */}
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Code className="w-4 h-4 text-gray-600" />
                <label className="text-sm font-medium text-black">
                  Model Names
                </label>
              </div>
              <div className="space-y-2">
                {modelNames.map((name, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => updateModelName(index, e.target.value)}
                      placeholder="Enter model name..."
                      className="flex-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm text-sm
                                 placeholder:text-gray-400 focus:outline-none focus:ring-2 
                                 focus:ring-black focus:border-black transition-colors"
                    />
                    <button
                      onClick={addModelField}
                      className="p-2 text-black hover:text-gray-700 hover:bg-gray-100 
                                 rounded-md transition-colors border border-gray-300"
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                    {modelNames.length > 1 && (
                      <button
                        onClick={() => removeModelField(index)}
                        className="p-2 text-black hover:text-gray-700 hover:bg-gray-100 
                                   rounded-md transition-colors border border-gray-300"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Route Section */}
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Code className="w-4 h-4 text-gray-600" />
                <label className="text-sm font-medium text-black">
                  Route Names
                </label>
              </div>
              <div className="space-y-2">
                {routeNames.map((name, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => updateRouteName(index, e.target.value)}
                      placeholder="Enter route name..."
                      className="flex-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm text-sm
                                 placeholder:text-gray-400 focus:outline-none focus:ring-2 
                                 focus:ring-black focus:border-black transition-colors"
                    />
                    <button
                      onClick={addRouteField}
                      className="p-2 text-black hover:text-gray-700 hover:bg-gray-100 
                                 rounded-md transition-colors border border-gray-300"
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                    {routeNames.length > 1 && (
                      <button
                        onClick={() => removeRouteField(index)}
                        className="p-2 text-black hover:text-gray-700 hover:bg-gray-100 
                                   rounded-md transition-colors border border-gray-300"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Schema Section */}
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Code className="w-4 h-4 text-gray-600" />
                <label className="text-sm font-medium text-black">
                  Schema Names
                </label>
              </div>
              <div className="space-y-2">
                {schemaNames.map((name, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => updateSchemaName(index, e.target.value)}
                      placeholder="Enter schema name..."
                      className="flex-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm text-sm
                                 placeholder:text-gray-400 focus:outline-none focus:ring-2 
                                 focus:ring-black focus:border-black transition-colors"
                    />
                    <button
                      onClick={addSchemaField}
                      className="p-2 text-black hover:text-gray-700 hover:bg-gray-100 
                                 rounded-md transition-colors border border-gray-300"
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                    {schemaNames.length > 1 && (
                      <button
                        onClick={() => removeSchemaField(index)}
                        className="p-2 text-black hover:text-gray-700 hover:bg-gray-100 
                                   rounded-md transition-colors border border-gray-300"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Util Section */}
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Code className="w-4 h-4 text-gray-600" />
                <label className="text-sm font-medium text-black">
                  Utility Names
                </label>
              </div>
              <div className="space-y-2">
                {utilNames.map((name, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => updateUtilName(index, e.target.value)}
                      placeholder="Enter utility name..."
                      className="flex-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm text-sm
                                 placeholder:text-gray-400 focus:outline-none focus:ring-2 
                                 focus:ring-black focus:border-black transition-colors"
                    />
                    <button
                      onClick={addUtilField}
                      className="p-2 text-black hover:text-gray-700 hover:bg-gray-100 
                                 rounded-md transition-colors border border-gray-300"
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                    {utilNames.length > 1 && (
                      <button
                        onClick={() => removeUtilField(index)}
                        className="p-2 text-black hover:text-gray-700 hover:bg-gray-100 
                                   rounded-md transition-colors border border-gray-300"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Generate Button */}
            <div className="pt-4 border-t border-gray-200">
              <button
                onClick={generateBackend}
                className="w-full bg-black hover:bg-gray-800 text-white font-medium 
                           py-3 px-4 rounded-md shadow-sm transition-colors duration-200
                           flex items-center justify-center gap-2 focus:outline-none 
                           focus:ring-2 focus:ring-black focus:ring-offset-2"
              >
                <Download className="w-4 h-4" />
                Generate & Download Backend
              </button>
            </div>
          </div>
        </div>

        <div className="text-center mt-6 text-sm text-gray-500">
          Configure your backend components and download the generated structure
        </div>
      </div>
    </div>
  );
}

export default App;
