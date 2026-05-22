const db = require("../config/db");

exports.createTask = (req, res) => {
  const {
    title,
    description,
    due_date,
    project_id,
    assigned_to,
  } = req.body;

  const sql =
    "INSERT INTO tasks (title, description, due_date, project_id, assigned_to) VALUES (?, ?, ?, ?, ?)";

  db.query(
    sql,
    [
      title,
      description,
      due_date,
      project_id,
      assigned_to,
    ],
    (err, result) => {
      if (err) {
        return res.status(500).json(err);
      }

      res.json({
        message: "Task Created Successfully",
      });
    }
  );
};

exports.getTasks = (req, res) => {
  const sql = "SELECT * FROM tasks";

  db.query(sql, (err, result) => {
    if (err) {
      return res.status(500).json(err);
    }

    res.json(result);
  });
};

exports.updateTaskStatus = (req, res) => {
  const { status } = req.body;

  const sql = "UPDATE tasks SET status=? WHERE id=?";

  db.query(sql, [status, req.params.id], (err, result) => {
    if (err) {
      return res.status(500).json(err);
    }

    res.json({
      message: "Task Updated",
    });
  });
};