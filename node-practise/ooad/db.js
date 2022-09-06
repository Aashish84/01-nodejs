const mysql = require("mysql");

class ConnectDB {
  #config = {
    host: "localhost",
    user: "root",
    password: "",
    database: "ewalk",
    port: 3306,
  };

  getCon() {
    let con = mysql.createConnection(this.#config);
    con.connect((err) => {
      if (err) throw err;
    });
    return con;
  }
}

module.exports = ConnectDB;
