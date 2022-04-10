const splitData = require("../models/splitData");
const validator = require("validator");

const Ajv = require("ajv");
const ajv = new Ajv({
  allErrors: true,
  coerceTypes: true,
  useDefaults: true,
  strictTuples: false,
});
require("ajv-errors")(ajv);
require("ajv-keywords")(ajv);
require("ajv-formats")(ajv);

const splitDataValidator = (req, res) => {
  let schema = {
    type: "object",
    properties: {
      date: {
        type: "date",
        errorMessage: {
          type: "Date is invalid.",
        },
      },
    },
  };
};

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

module.exports = { postSplitData, splitDataValidator };
