const mongoose = require("mongoose");

const RestaurantSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please fill in the name!"],
    minlength: [2, "Name must be at least 2 characters!"],
  },
  cuisine: {
    type: String,
    required: [true, "Please fill in the cuisine type!"],
    enum: ["Mexican", "Pizza", "Burgers"],
  },

  hasDelivery: { type: Boolean, required: true },

  dishImg: { type: String, required: true },
});

const Restaurant = mongoose.model("Restaurant", RestaurantSchema);

module.exports = Restaurant;
