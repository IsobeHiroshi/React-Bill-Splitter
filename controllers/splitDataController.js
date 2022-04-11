const splitData = require("../models/splitData");
const validators = require("../validator/validator");

const postSplitData = (req, res) => {
  let newSplitData = new splitData({
    date: req.body.date,
    splitType: req.body.splitType,
    participants: req.body.participants,
    title: req.body.title,
    description: req.body.description,
    totalAmountOfBill: req.body.totalAmountOfBill,
    payer: req.body.payer,
  });

  newSplitData
    .save()
    .then((result) => console.log("Split Data Successfully Saved"))
    .catch((error) => res.status(500).send(error));
};

/* Test the split data using validator.js */
const postSplitDataTest = (req, res) => {
  validators.splitDataValidator(req, res);
  if (res.locals.errors) {
    res.send(res.locals);
  } else {
    res.json(req.body);
  }
};

/* Fetch all the history data from the database  */
const getSplitData = (req, res) => {
  splitData
    .find()
    .then((results) => res.status(200).send(results))
    .catch((error) => console.log(error));
};

module.exports = { postSplitData, postSplitDataTest, getSplitData };
