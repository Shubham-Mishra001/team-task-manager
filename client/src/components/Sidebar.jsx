import { Link, useLocation } from "react-router-dom";

const Sidebar = () => {
  const location = useLocation();

  const menuItem = (path, label) => (
    <Link
      to={path}
      className={`block px-5 py-3 rounded-xl transition duration-300 mb-3
      ${
        location.pathname === path
          ? "bg-blue-600 text-white"
          : "text-gray-300 hover:bg-gray-700 hover:text-white"
      }`}
    >
      {label}
    </Link>
  );

  return (
    <div className="w-[260px] min-h-screen bg-gray-900 p-6 fixed left-0 top-0 shadow-2xl">

      <h1 className="text-3xl font-bold text-white mb-10">
        Task Manager
      </h1>

      {menuItem("/dashboard", "Dashboard")}
      {menuItem("/projects", "Projects")}
      {menuItem("/tasks", "Tasks")}
      {menuItem("/", "Login")}
      {menuItem("/register", "Register")}

    </div>
  );
};

export default Sidebar;