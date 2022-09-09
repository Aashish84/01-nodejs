const express = require("express");
const app = express();
const { Login, LoginForm } = require("./login_module");
const ConnectDB = require("./db_module/db");

app.use(
  express.urlencoded({
    extended: true,
  })
);

app.get("/", (req, res) => {
  const login = new LoginForm();
  res.send(login.getLoginHTML());
});

app.get("/user", (req, res) => {
  const conObj = new ConnectDB();
  const con = conObj.getCon();
  con.query("SELECT * FROM user", function (err, result, fields) {
    if (err) throw err;
    res.json(result);
  });
});

app.post("/login", (req, res) => {
  const { username, password } = req.body;
  if (!username && !password) {
    res.no_valid_credentials = "invalid";
    return res.redirect("/");
  }

  const login = new Login();
  login.setUserName(username);
  login.setPassword(password);
  const query = "select * from user where name=? and password=?";

  const conObj = new ConnectDB();
  const con = conObj.getCon();
  con.query(
    query,
    [login.getName(), login.getPassword()],
    function (err, result) {
      if (err) throw err;
      return res.json({ noOfUserFound: result.length, user: result });
    }
  );
});

app.listen(5000, () => {
  console.log(`server is listening at port 5000...`);
});
