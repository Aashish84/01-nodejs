const notfound = (req, res) => {
  res.status(500).send("no routes found ... ");
};

module.exports = notfound;
