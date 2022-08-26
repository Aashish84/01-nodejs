const express = require("express");
const router = express.Router();

const {
  getAllTasks,
  getTask,
  addTask,
  updateTask,
  deleteTask,
} = require("../controller/tasks");

// router.get("/", (req, res) => {
//   res.json({ name: "asis" });
// });

// router.post("/", (req, res) => {
//   res.json({ method: "post" });
// });

router.route("/").get(getAllTasks).post(addTask);

router.route("/:id").get(getTask).patch(updateTask).delete(deleteTask);

module.exports = router;
