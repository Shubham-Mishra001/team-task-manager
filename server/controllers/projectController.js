const db = require("../config/db");

exports.createProject = (req, res) => {
  const { title, description } = req.body;

  const sql =
    "INSERT INTO projects (title, description) VALUES (?, ?)";

  db.query(sql, [title, description], (err, result) => {
    if (err) {
      return res.status(500).json(err);
    }

    res.json({
      message: "Project Created Successfully",
    });
  });
};

exports.getProjects = (req, res) => {
  const sql = "SELECT * FROM projects";

  db.query(sql, (err, result) => {
    if (err) {
      return res.status(500).json(err);
    }

    res.json(result);
  });
};