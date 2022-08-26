const mongoose = require("mongoose");

// const url = "mongodb://localhost:27017/lib";

// mongoose
//   .connect(url)
//   .then(() => {
//     console.log("connected!!!");
//   })
//   .catch((err) => {
//     console.log(err);
//   });

const connectDB = (url) => {
  return mongoose.connect(url);
};

module.exports = connectDB;
