const express = require("express");
const router = express.Router();

// controllers
const { getAllTasks } = require("../controller/tasks");

router.route("/").get(getAllTasks);

module.exports = router;
