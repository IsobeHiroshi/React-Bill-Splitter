const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const splitDataSchema = new Schema({
  date: {},
  splitType: {},
  participants: {},
  title: {},
  description: {},
  totalAmountOfBill: {},
  payer: {},
});

const splitData = mongoose.model("splitData", splitDataSchema);

module.exports = splitData;
