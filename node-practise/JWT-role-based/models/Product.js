const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "no product name"],
      minLength: 4,
    },
    price: {
      type: Number,
      required: [true, "no price for product"],
    },
    discount: {
      type: Number,
      default: 0,
    },
    category: {
      type: String,
      required: true,
      enum: {
        values: ["Vegetables", "Fruits"],
        message: "{VALUE} is not supported for product category",
      },
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", ProductSchema);
