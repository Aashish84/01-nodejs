const mongoose = require("mongoose");

const connectionString =
  "mongodb+srv://asis:1232663773@node-express-project.kqho3gs.mongodb.net/05-TASK-MANAGER?retryWrites=true&w=majority";

const connectDB = () => {
  return mongoose.connect(connectionString);
};

// mongoose
//   .connect(connectionString)
//   .then(() => console.log("connected !!!"))
//   .catch((err) => console.log(err));

module.exports = connectDB;
