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

module.exports = { splitDataValidator };
