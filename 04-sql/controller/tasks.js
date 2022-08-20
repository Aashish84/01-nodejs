const { con } = require("../db/connect");

const getAllTasks = (req, res) => {
  console.log(req.header);
  con.query("SELECT * FROM user", function (err, result, fields) {
    if (err) throw err;
    let resultArray = Object.values(JSON.parse(JSON.stringify(result)));
    res.json(resultArray);
  });
};

module.exports = { getAllTasks };
