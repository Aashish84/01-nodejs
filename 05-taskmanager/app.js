const express = require("express");
const app = express();
require("dotenv").config();

const connectDB = require("./db/connect");
const tasks = require("./routes/tasks");
const notfound = require("./middleware/notfound");
const errorHandlerMiddleware = require("./middleware/error-handeler");

// static front end
app.use(express.static("./public"));

// middleware
app.use(express.json());

// routes
app.use("/api/v1/tasks", tasks);

// custom error
app.use(notfound);
app.use(errorHandlerMiddleware);

// set PORT=6000&&node app.js - cmd
// $env:PORT="6000"; node app.js - powershell
const port = process.env.PORT || 5000;
const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () => {
      console.log(`server is listening at port ${port}`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();

// var app = require("express")();

// app.get("/", function (httpRequest, httpResponse, next) {
//   httpResponse.write("Hello");
//   next(); //remove this and see what happens
// });

// app.get("/", function (httpRequest, httpResponse, next) {
//   httpResponse.write(" World !!!");
//   httpResponse.end();
// });

// app.listen(8080);
