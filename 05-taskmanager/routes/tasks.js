const express = require("express");
const router = express.Router();

const {
  getAllTasks,
  getTask,
  addTask,
  updateTask,
  deleteTask,
} = require("../controller/tasks");

router.route("/").get(getAllTasks).post(addTask);
router.route("/:id").get(getTask).patch(updateTask).delete(deleteTask);

module.exports = router;
