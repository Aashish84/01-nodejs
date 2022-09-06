const express = require("express");
const app = express();
const Login = require("./login");
const ConnectDB = require("./db");

app.use(
  express.urlencoded({
    extended: true,
  })
);

app.get("/", (req, res) => {
  const login = new Login();
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
  const login = new Login();
  login.setUserName(username);
  login.setPassword(password);
  res.json(login.getCredentialsJSON());
});

app.listen(5000, () => {
  console.log(`server is listening at port 5000...`);
});
