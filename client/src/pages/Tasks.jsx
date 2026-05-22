import { useEffect, useState } from "react";
import API from "../services/api";

const Tasks = () => {
  const [tasks, setTasks] = useState([]);

  const [search, setSearch] = useState("");

  const [taskData, setTaskData] = useState({
    title: "",
    description: "",
    due_date: "",
    project_id: "",
    assigned_to: "",
  });

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

  const handleChange = (e) => {
    setTaskData({
      ...taskData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await API.post("/tasks", taskData);

      alert(res.data.message);

      setTaskData({
        title: "",
        description: "",
        due_date: "",
        project_id: "",
        assigned_to: "",
      });

      fetchTasks();

    } catch (error) {
      alert("Task Creation Failed");
    }
  };

  const updateStatus = async (id, status) => {
    try {
      await API.put(`/tasks/${id}`, {
        status,
      });

      fetchTasks();

    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-10">

      <h1 className="text-4xl font-bold mb-10 text-gray-800">
        Task Management
      </h1>

      {/* CREATE TASK FORM */}

      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-2xl shadow-xl mb-10"
      >

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

          <input
            type="text"
            name="title"
            placeholder="Task Title"
            value={taskData.title}
            onChange={handleChange}
            className="border border-gray-300 p-3 rounded-lg outline-none focus:border-blue-500"
          />

          <input
            type="date"
            name="due_date"
            value={taskData.due_date}
            onChange={handleChange}
            className="border border-gray-300 p-3 rounded-lg outline-none focus:border-blue-500"
          />

          <input
            type="number"
            name="project_id"
            placeholder="Project ID"
            value={taskData.project_id}
            onChange={handleChange}
            className="border border-gray-300 p-3 rounded-lg outline-none focus:border-blue-500"
          />

          <input
            type="number"
            name="assigned_to"
            placeholder="Assigned User ID"
            value={taskData.assigned_to}
            onChange={handleChange}
            className="border border-gray-300 p-3 rounded-lg outline-none focus:border-blue-500"
          />

        </div>

        <textarea
          name="description"
          placeholder="Task Description"
          rows="4"
          value={taskData.description}
          onChange={handleChange}
          className="w-full border border-gray-300 p-3 rounded-lg mt-5 outline-none focus:border-blue-500"
        />

        <button className="mt-5 bg-blue-600 hover:bg-blue-700 transition duration-300 text-white font-semibold px-6 py-3 rounded-lg">
          Create Task
        </button>

      </form>

      {/* SEARCH BAR */}

      <div className="mb-8">

        <input
          type="text"
          placeholder="Search Tasks..."
          value={search}
          onChange={(e) =>
            setSearch(e.target.value)
          }
          className="w-full md:w-96 border border-gray-300 p-3 rounded-xl outline-none focus:border-blue-500 shadow-sm"
        />

      </div>

      {/* TASK LIST */}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

        {tasks.length === 0 ? (

          <div className="bg-white p-10 rounded-2xl shadow text-center col-span-2">

            <h2 className="text-2xl font-bold text-gray-700">
              No Tasks Available
            </h2>

            <p className="text-gray-500 mt-2">
              Create your first task to get started.
            </p>

          </div>

        ) : (

          tasks
            .filter((task) =>
              task.title
                .toLowerCase()
                .includes(search.toLowerCase())
            )
            .map((task) => (

              <div
                key={task.id}
                className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-1 transition duration-300"
              >

                <h2 className="text-2xl font-bold text-gray-800 mb-2">
                  {task.title}
                </h2>

                <p className="text-gray-600 mb-4">
                  {task.description}
                </p>

                <div className="flex justify-between items-center mb-3">

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

                <select
                  className="border border-gray-300 p-2 rounded-lg w-full"
                  onChange={(e) =>
                    updateStatus(task.id, e.target.value)
                  }
                >
                  <option>Update Status</option>

                  <option value="pending">
                    Pending
                  </option>

                  <option value="in-progress">
                    In Progress
                  </option>

                  <option value="completed">
                    Completed
                  </option>

                </select>

              </div>

            ))

        )}

      </div>

    </div>
  );
};

export default Tasks;