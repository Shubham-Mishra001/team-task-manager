import { useState } from "react";
import API from "../services/api";

const Projects = () => {
  const [project, setProject] = useState({
    title: "",
    description: "",
  });

  const handleChange = (e) => {
    setProject({
      ...project,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await API.post("/projects", project);

      alert(res.data.message);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold mb-5">
        Create Project
      </h1>

      <form
        onSubmit={handleSubmit}
        className="bg-white p-5 rounded shadow w-96"
      >
        <input
          type="text"
          name="title"
          placeholder="Project Title"
          className="w-full border p-2 mb-3"
          onChange={handleChange}
        />

        <textarea
          name="description"
          placeholder="Description"
          className="w-full border p-2 mb-3"
          onChange={handleChange}
        />

        <button className="bg-blue-500 text-white px-4 py-2 w-full">
          Create Project
        </button>
      </form>
    </div>
  );
};

export default Projects;