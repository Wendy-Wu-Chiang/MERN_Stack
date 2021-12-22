const mongoose = require("mongoose");

const PlayerSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required!"],
      minlength: [2, "Name has to be at least 2 characters long!"],
    },

    position: {
      type: String,
      enum: ["PG", "SG", "SF", "PF", "C"],
    },

    gameOneStatus: {
      type: String,
      default: "Undecided",
      enum: ["Undecided", "Playing", "Not Playing"],
    },

    gameTwoStatus: {
      type: String,
      default: "Undecided",
      enum: ["Undecided", "Playing", "Not Playing"],
    },

    gameThreeStatus: {
      type: String,
      default: "Undecided",
      enum: ["Undecided", "Playing", "Not Playing"],
    },
  },
  { timestamps: true }
);
module.exports = mongoose.model("Player", PlayerSchema);
