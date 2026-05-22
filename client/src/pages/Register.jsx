import { useState } from "react";
import API from "../services/api";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    role: "member",
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
    const res = await API.post(
      "/auth/register",
      formData
    );

    alert(res.data.message);

  } catch (error) {
    alert("Registration Failed");
  }
};

  return (
    <div className="min-h-screen flex justify-center items-center bg-gradient-to-r from-purple-500 to-pink-600">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-10 rounded-2xl shadow-2xl w-[420px]"
      >
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">
          Create Account
        </h2>

        <input
          type="text"
          name="name"
          placeholder="Full Name"
          className="w-full border border-gray-300 p-3 rounded-lg mb-4 outline-none focus:border-purple-500"
          onChange={handleChange}
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          className="w-full border border-gray-300 p-3 rounded-lg mb-4 outline-none focus:border-purple-500"
          onChange={handleChange}
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          className="w-full border border-gray-300 p-3 rounded-lg mb-4 outline-none focus:border-purple-500"
          onChange={handleChange}
        />

        <select
          name="role"
          className="w-full border border-gray-300 p-3 rounded-lg mb-5 outline-none"
          onChange={handleChange}
        >
          <option value="member">Member</option>
          <option value="admin">Admin</option>
        </select>

        <button className="bg-purple-600 hover:bg-purple-700 transition duration-300 text-white font-semibold px-4 py-3 rounded-lg w-full">
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;