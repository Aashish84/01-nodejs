const express = require("express");

const router = express.Router();

router.post("/login", (req, res) => {
  const { name } = req.body;
  if (name) {
    return res.status(200).send(`welcome ${name}`);
  }
  res.send("form is empty");
});

module.exports = router;
