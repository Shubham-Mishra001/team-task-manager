import { useEffect, useState } from "react";
import API from "../services/api";

const Tasks = () => {
  const [tasks, setTasks] = useState([]);

  const [taskData, setTaskData] = useState({
    title: "",
    description: "",
    due_date: "",
    project_id: "",
    assigned_to: "",
  });

  const fetchTasks = async () => {
    const res = await API.get("/tasks");
    setTasks(res.data);
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

      fetchTasks();
    } catch (error) {
      console.log(error);
    }
  };

  const updateStatus = async (id, status) => {
    await API.put(`/tasks/${id}`, { status });

    fetchTasks();
  };

  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold mb-5">
        Task Management
      </h1>

      {/* Create Task Form */}

      <form
        onSubmit={handleSubmit}
        className="bg-white p-5 rounded shadow w-96 mb-10"
      >
        <input
          type="text"
          name="title"
          placeholder="Task Title"
          className="w-full border p-2 mb-3"
          onChange={handleChange}
        />

        <textarea
          name="description"
          placeholder="Description"
          className="w-full border p-2 mb-3"
          onChange={handleChange}
        />

        <input
          type="date"
          name="due_date"
          className="w-full border p-2 mb-3"
          onChange={handleChange}
        />

        <input
          type="number"
          name="project_id"
          placeholder="Project ID"
          className="w-full border p-2 mb-3"
          onChange={handleChange}
        />

        <input
          type="number"
          name="assigned_to"
          placeholder="Assigned User ID"
          className="w-full border p-2 mb-3"
          onChange={handleChange}
        />

        <button className="bg-blue-500 text-white px-4 py-2 w-full">
          Create Task
        </button>
      </form>

      {/* Task List */}

      <div className="grid gap-5">
        {tasks.map((task) => (
          <div
            key={task.id}
            className="bg-white p-5 rounded shadow"
          >
            <h2 className="text-xl font-bold">
              {task.title}
            </h2>

            <p>{task.description}</p>

            <p className="mt-2">
              Status:
              <span className="font-bold ml-2">
                {task.status}
              </span>
            </p>

            <select
              className="border p-2 mt-3"
              onChange={(e) =>
                updateStatus(task.id, e.target.value)
              }
            >
              <option>Update Status</option>
              <option value="pending">Pending</option>
              <option value="in-progress">
                In Progress
              </option>
              <option value="completed">
                Completed
              </option>
            </select>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tasks;