const Task = require("../models/Task");
const asyncWrapper = require("../middleware/async");
const { createCustomError } = require("../error/custom-error");

const getAllTasks = asyncWrapper(async (req, res) => {
  const tasks = await Task.find({});
  res.status(200).json({ tasks });
});

const getTask = asyncWrapper(async (req, res, next) => {
  const { id: taskID } = req.params;
  const task = await Task.findOne({ _id: taskID });
  if (!task) {
    return next(
      createCustomError(`refactored error not found of id ${taskID}`, 404)
    );
  }
  res.status(200).json({ task });
});

const addTask = asyncWrapper(async (req, res) => {
  const task = await Task.create(req.body);
  res.status(201).json({ task });
});

const updateTask = asyncWrapper(async (req, res, next) => {
  const { id: taskID } = req.params;
  const task = await Task.findOneAndUpdate({ _id: taskID }, req.body, {
    new: true,
    runValidators: true,
  });
  task
    ? res.status(200).json({ task })
    : next(
        createCustomError(`refactored error not found of id ${taskID}`, 404)
      );
});

const deleteTask = asyncWrapper(async (req, res, next) => {
  const { id: taskID } = req.params;
  const task = await Task.findOneAndDelete({ _id: taskID });
  !task
    ? next(createCustomError(`refactored error not found of id ${taskID}`, 404))
    : res.status(200).json({ task });
});

//no-async-wrapper , no-custom-error-for-404-error
const editTask = async (req, res) => {
  try {
    const { id: taskID } = req.params;
    const task = await Task.findOneAndUpdate({ _id: taskID }, req.body, {
      new: true,
      runValidators: true,
      overwrite: true,
    });
    task
      ? res.status(200).json({ task })
      : res.status(404).json({ msg: `data not found of id ${taskID}` });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

module.exports = {
  getAllTasks,
  getTask,
  addTask,
  updateTask,
  editTask,
  deleteTask,
};
