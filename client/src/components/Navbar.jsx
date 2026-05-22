import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();

  const navItem = (path, label) => (
    <Link
      to={path}
      className={`px-4 py-2 rounded-lg transition duration-300 ${
        location.pathname === path
          ? "bg-blue-600 text-white"
          : "text-gray-300 hover:bg-gray-700 hover:text-white"
      }`}
    >
      {label}
    </Link>
  );

  return (
    <div className="bg-gray-900 shadow-lg px-10 py-4 flex justify-between items-center sticky top-0 z-50">
      <h1 className="text-2xl font-bold text-white">
        Team Task Manager
      </h1>

      <div className="flex gap-3">
        {navItem("/", "Login")}
        {navItem("/register", "Register")}
        {navItem("/dashboard", "Dashboard")}
        {navItem("/projects", "Projects")}
        {navItem("/tasks", "Tasks")}
      </div>
    </div>
  );
};

export default Navbar;