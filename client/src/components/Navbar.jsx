import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="bg-black text-white p-4 flex gap-5">
      <Link to="/">Login</Link>

      <Link to="/register">Register</Link>

      <Link to="/dashboard">Dashboard</Link>

      <Link to="/projects">Projects</Link>

      <Link to="/tasks">Tasks</Link>
    </div>
  );
};

export default Navbar;