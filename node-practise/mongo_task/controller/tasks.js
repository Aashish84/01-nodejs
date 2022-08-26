const getAllTasks = (req, res) => {
  res.json({ name: "getalltasks" });
};

const getTask = (req, res) => {
  res.json({ name: "get-task" });
};
const addTask = (req, res) => {
  res.json(req.body);
};
const updateTask = (req, res) => {
  res.json(req.params);
};
const deleteTask = (req, res) => {
  res.json({ myId: req.params.id });
};

module.exports = { getAllTasks, getTask, addTask, updateTask, deleteTask };
