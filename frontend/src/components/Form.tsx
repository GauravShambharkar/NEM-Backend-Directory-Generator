import axios from "axios";
import { useState } from "react";

const Form = () => {
  const [form, setForm] = useState({
    controllerName: "",
    middlewareName: "",
    modelName: "",
    routeName: "",
    schemaName: "",
    utilName: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const response = await axios.post("http://localhost:4000/generate", form, {
      responseType: "blob",
    });

    const url = window.URL.createObjectURL(new Blob([response.data]));
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", "backend.zip");
    document.body.appendChild(link);
    link.click();
  };

  return (
    <form onSubmit={handleSubmit}>
      {[
        "controllerName",
        "middlewareName",
        "modelName",
        "routeName",
        "schemaName",
        "utilName",
      ].map((field) => (
        <input
          key={field}
          name={field}
          value={form[field as keyof typeof form]}
          onChange={handleChange}
          placeholder={field}
        />
      ))}
      <button type="submit">Generate Backend</button>
    </form>
  );
};

export default Form;
