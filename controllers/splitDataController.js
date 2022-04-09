const splitData = require("../models/splitData");

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

module.exports = { postSplitData };
