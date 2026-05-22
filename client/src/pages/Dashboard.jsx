import { useEffect, useState } from "react";
import API from "../services/api";

const Dashboard = () => {
  const [tasks, setTasks] = useState([]);

  const fetchTasks = async () => {
    try {
      const res = await API.get("/tasks");
      setTasks(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const totalTasks = tasks.length;

  const completedTasks = tasks.filter(
    (task) => task.status === "completed"
  ).length;

  const inProgressTasks = tasks.filter(
    (task) => task.status === "in-progress"
  ).length;

  const pendingTasks = tasks.filter(
    (task) => task.status === "pending"
  ).length;

  return (
    <div className="min-h-screen bg-gray-100 p-10">

      <div className="mb-10">

        <h1 className="text-5xl font-bold text-gray-800 mb-3">
          Dashboard Overview
        </h1>

        <p className="text-gray-500 text-lg">
          Monitor project progress and task performance.
        </p>

      </div>

      {/* STATS CARDS */}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

        {/* TOTAL */}

        <div className="bg-gradient-to-r from-blue-500 to-blue-700 text-white p-8 rounded-3xl shadow-xl hover:scale-105 transition duration-300">

          <h2 className="text-2xl font-semibold mb-4">
            Total Tasks
          </h2>

          <p className="text-6xl font-bold">
            {totalTasks}
          </p>

        </div>

        {/* COMPLETED */}

        <div className="bg-gradient-to-r from-green-500 to-green-700 text-white p-8 rounded-3xl shadow-xl hover:scale-105 transition duration-300">

          <h2 className="text-2xl font-semibold mb-4">
            Completed
          </h2>

          <p className="text-6xl font-bold">
            {completedTasks}
          </p>

        </div>

        {/* IN PROGRESS */}

        <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white p-8 rounded-3xl shadow-xl hover:scale-105 transition duration-300">

          <h2 className="text-2xl font-semibold mb-4">
            In Progress
          </h2>

          <p className="text-6xl font-bold">
            {inProgressTasks}
          </p>

        </div>

        {/* PENDING */}

        <div className="bg-gradient-to-r from-red-500 to-red-700 text-white p-8 rounded-3xl shadow-xl hover:scale-105 transition duration-300">

          <h2 className="text-2xl font-semibold mb-4">
            Pending
          </h2>

          <p className="text-6xl font-bold">
            {pendingTasks}
          </p>

        </div>

      </div>

      {/* RECENT TASKS */}

      <div className="mt-14">

        <h2 className="text-3xl font-bold text-gray-800 mb-6">
          Recent Tasks
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {tasks.slice(0, 4).map((task) => (

            <div
              key={task.id}
              className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition duration-300"
            >

              <h3 className="text-2xl font-bold text-gray-800 mb-2">
                {task.title}
              </h3>

              <p className="text-gray-600 mb-4">
                {task.description}
              </p>

              <div className="flex justify-between items-center">

                <span
                  className={`px-3 py-1 rounded-full text-sm font-semibold capitalize
                  ${
                    task.status === "completed"
                      ? "bg-green-100 text-green-700"
                      : task.status === "in-progress"
                      ? "bg-yellow-100 text-yellow-700"
                      : "bg-red-100 text-red-700"
                  }`}
                >
                  {task.status}
                </span>

                <span className="text-gray-500 text-sm">
                  Due: {task.due_date}
                </span>

              </div>

            </div>

          ))}

        </div>

      </div>

    </div>
  );
};

export default Dashboard;