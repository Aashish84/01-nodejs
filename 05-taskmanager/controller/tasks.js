const Task = require("../models/Task");

const getAllTasks = (req, res) => {
  res.json({ message: "getAllTasks" });
};

const getTask = (req, res) => {
  res.send(req.params);
};

const addTask = async (req, res) => {
  try {
    const task = await Task.create(req.body);
    res.status(201).json({ task });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};
const updateTask = (req, res) => {
  res.json(req.params);
};
const deleteTask = (req, res) => {
  res.json({ message: "delete tasks" });
};

module.exports = { getAllTasks, getTask, addTask, updateTask, deleteTask };
