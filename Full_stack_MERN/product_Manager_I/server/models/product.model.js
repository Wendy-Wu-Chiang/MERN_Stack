const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Title is required!"],
      minlength: [2, "Title has to be at least 2 characters long!"],
    },
    price: {
      type: String,
      required: [true, "Price is required!"],
      minlength: [1, "Peice has to be at least 2 characters long!"],
    },
    description: {
      type: String,
      required: [true, "Description is required!"],
      minlength: [2, "Description has to be at least 2 characters long!"],
    },
  },
  { timestamps: true }
);
const Product = mongoose.model("Product", ProductSchema);
module.exports = Product;
