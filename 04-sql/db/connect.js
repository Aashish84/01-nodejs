const mysql = require("mysql");

const config = {
  host: "localhost",
  user: "root",
  password: "",
  database: "ewalk",
  port: 3306,
};

const con = mysql.createConnection(config);

const initialize = () => {
  con.connect(function (err) {
    if (err) throw err;
    console.log("Connected to database !!");
  });
};

module.exports = {
  con,
  initialize,
};
