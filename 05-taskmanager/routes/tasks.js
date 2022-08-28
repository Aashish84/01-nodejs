const express = require("express");
const router = express.Router();

const {
  getAllTasks,
  getTask,
  addTask,
  updateTask,
  editTask,
  deleteTask,
} = require("../controller/tasks");

router.route("/").get(getAllTasks).post(addTask);
router
  .route("/:id")
  .get(getTask)
  .patch(updateTask)
  .put(editTask)
  .delete(deleteTask);

module.exports = router;
