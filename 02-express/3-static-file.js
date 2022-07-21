// nav-bar app as 1-http-server.js
const express = require("express");
const { resolve } = require("path");

const app = express();

app.use(express.static("./public"));

//comenting below code also work because index.html is also static
//server side rendering ...
//www.youtube.com/watch?v=SccSCuHhOw0&t=398s

// app.get("/", (req, res) => {
//   res.status(200);
//   const file_path = resolve(__dirname, "public", "index.html");
//   res.sendFile(file_path);
// });

https: app.listen(5000, () => {
  console.log("server listening at 5000...");
});
