const notfound = (req, res) => res.status(404).send("unknown route");

module.exports = notfound;
