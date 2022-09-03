require("dotenv").config();

const express = require("express");
const app = express();
require("express-async-errors");
const connectDB = require("./db/connect");

const notfound = require("./middleware/notfound");
const errorHandelerMiddleware = require("./middleware/error-handler");

// middleware
app.use(express.json());

// routes
const products = require("./routers/product");

app.use("/api/v1/products", products);

app.get("/", (req, res) => {
  res.send("hello");
});

app.use(notfound);
app.use(errorHandelerMiddleware);

const port = 5000;

const start = async () => {
  try {
    await connectDB();
    app.listen(port, () => {
      console.log(`server is listening at port ${port}...`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
