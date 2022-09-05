const mongoose = require("mongoose");

const JobSchema = new mongoose.Schema(
  {
    company: {
      type: String,
      required: [true, "no company found"],
      maxLength: 50,
    },
    position: {
      type: String,
      required: [true, "no position found"],
      maxLength: 100,
    },
    status: {
      type: String,
      enum: {
        values: ["interview", "declined", "pending"],
        message: "{VALUE} is not supported",
      },
      default: "pending",
    },
    createdBy: {
      type: mongoose.Types.ObjectId,
      ref: "User",
      required: [true, "no user linked"],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Job", JobSchema);
