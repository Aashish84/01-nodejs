const getAllTasks = (req, res) => {
  res.json({ message: "getAllTasks" });
};

const getTask = (req, res) => {
  res.send(req.params);
};

const addTask = (req, res) => {
  res.json(req.body);
};
const updateTask = (req, res) => {
  res.json(req.params);
};
const deleteTask = (req, res) => {
  res.json({ message: "delete tasks" });
};

module.exports = { getAllTasks, getTask, addTask, updateTask, deleteTask };
