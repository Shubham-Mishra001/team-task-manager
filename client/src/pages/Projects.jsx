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
      const res = await API.post(
        "/projects",
        project
      );

      alert(res.data.message);

      setProject({
        title: "",
        description: "",
      });

    } catch (error) {
      alert("Project Creation Failed");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center p-10">

      <form
        onSubmit={handleSubmit}
        className="bg-white p-10 rounded-2xl shadow-2xl w-full max-w-2xl"
      >

        <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">
          Create Project
        </h1>

        <div className="mb-5">

          <label className="block mb-2 font-semibold text-gray-700">
            Project Title
          </label>

          <input
            type="text"
            name="title"
            placeholder="Enter Project Title"
            value={project.title}
            onChange={handleChange}
            className="w-full border border-gray-300 p-4 rounded-xl outline-none focus:border-blue-500"
          />

        </div>

        <div className="mb-6">

          <label className="block mb-2 font-semibold text-gray-700">
            Project Description
          </label>

          <textarea
            name="description"
            rows="6"
            placeholder="Enter Project Description"
            value={project.description}
            onChange={handleChange}
            className="w-full border border-gray-300 p-4 rounded-xl outline-none focus:border-blue-500"
          />

        </div>

        <button className="bg-blue-600 hover:bg-blue-700 transition duration-300 text-white font-semibold px-6 py-4 rounded-xl w-full">
          Create Project
        </button>

      </form>

    </div>
  );
};

export default Projects;