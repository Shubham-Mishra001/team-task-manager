import { useState } from "react";
import API from "../services/api";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await API.post("/auth/login", formData);

      localStorage.setItem("token", res.data.token);

      window.location.href = "/dashboard";
    } catch (error) {
      alert("Login Failed");
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gradient-to-r from-blue-500 to-indigo-700">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-10 rounded-2xl shadow-2xl w-[400px]"
      >
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">
          Welcome Back
        </h2>

        <input
          type="email"
          name="email"
          placeholder="Enter Email"
          className="w-full border border-gray-300 p-3 rounded-lg mb-5 outline-none focus:border-blue-500"
          onChange={handleChange}
        />

        <input
          type="password"
          name="password"
          placeholder="Enter Password"
          className="w-full border border-gray-300 p-3 rounded-lg mb-5 outline-none focus:border-blue-500"
          onChange={handleChange}
        />

        <button className="bg-blue-600 hover:bg-blue-700 transition duration-300 text-white font-semibold px-4 py-3 rounded-lg w-full">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;