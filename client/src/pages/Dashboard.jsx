import { useEffect, useState } from "react";
import API from "../services/api";

const Dashboard = () => {
  const [tasks, setTasks] = useState([]);

  const fetchTasks = async () => {
    const res = await API.get("/tasks");
    setTasks(res.data);
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const totalTasks = tasks.length;

  const completedTasks = tasks.filter(
    (task) => task.status === "completed"
  ).length;

  const pendingTasks = tasks.filter(
    (task) => task.status !== "completed"
  ).length;

  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold mb-5">
        Team Task Manager Dashboard
      </h1>

      <div className="grid grid-cols-3 gap-5">
        <div className="bg-blue-500 text-white p-5 rounded">
          <h2 className="text-xl">Total Tasks</h2>

          <p className="text-2xl font-bold">
            {totalTasks}
          </p>
        </div>

        <div className="bg-green-500 text-white p-5 rounded">
          <h2 className="text-xl">Completed</h2>

          <p className="text-2xl font-bold">
            {completedTasks}
          </p>
        </div>

        <div className="bg-red-500 text-white p-5 rounded">
          <h2 className="text-xl">Pending</h2>

          <p className="text-2xl font-bold">
            {pendingTasks}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;