require("express-async-errors");
require("dotenv").config();
const express = require("express");
const app = express();

// db
const connectDB = require("./db/connect");

// routes
const auth = require("./routes/auth");
const product = require("./routes/product");

// middleware
const errorHandelerMiddleware = require("./middleware/error-handler");
app.use(express.json());
app.use("/api/v1", auth);
app.use("/api/v1/product", product);

app.get("/", (req, res) => {
  res.send("home");
});

app.use(errorHandelerMiddleware);

const start = async () => {
  try {
    await connectDB();
    app.listen(5000, () => {
      console.log(`server is listening at port 5000...`);
    });
  } catch (error) {
    console.log(error);
  }
};
start();
