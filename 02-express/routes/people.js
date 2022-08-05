const express = require("express");

const router = express.Router();
const { people } = require("../data");

router.get("/api/people", (req, res) => {
  res.status(200).json({ success: true, data: people });
});

module.exports = router;
