const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const splitDataSchema = new Schema({
  date: { type: Date, required: true },
  splitType: {
    type: String,
    enum: ["even", "russianRoulette"],
    default: "even",
  },
  participants: { type: Array, required: true },
  title: { type: String, maxLength: 100, required: true, minLength: 1 },
  description: { type: String, maxLength: 200 },
  totalAmountOfBill: { type: Number, required: true, min: 1 },
  payer: { type: String, required: true },
});

const splitData = mongoose.model("splitData", splitDataSchema);

module.exports = splitData;
