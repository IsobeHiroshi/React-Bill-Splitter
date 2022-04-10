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

exports.splitDataValidator = (req, res) => {
  let schema = {
    type: "object",
    properties: {
      date: {
        type: "string",
        default: false,
        minLength: 1,
        format: "date",
        errorMessage: {
          type: "Date is invalid.",
          format: "Date is invalid.",
        },
      },
      splitType: {
        enum: ["even", "russianRoulette"],
        default: "even",
        errorMessage: {
          type: "Split Type is invalid.",
        },
      },
      title: {
        type: "string",
        transform: ["trim"],
        minLength: 1,
        maxLength: 100,
        errorMessage: {
          minLength: "Please enter the title within 100 words.",
          maxLength: "Please enter the title within 100 words.",
        },
      },
      description: {
        type: "string",
        transform: ["trim"],
        maxLength: 200,
        errorMessage: {
          maxLength: "Please enter the title within 200 words.",
        },
      },
      totalAmountOfBill: {
        type: "number",
        transform: ["trim"],
        minimum: 1,
        errorMessage: {
          type: "The total amount of bill is invalid.",
          minimum: "Please enter the total amount of bill more than 1 dollar.",
        },
      },
      participants: {
        type: "array",
        minItems: 2,
        maxItems: 10,
        items: [
          {
            type: "string",
            minLength: 1,
            maxLength: 50,
            transform: ["trim"],
            errorMessage: {
              minLength:
                "The length of the participants' name should be from 1 to 50.",
              maxLength:
                "The length of the participants' name should be from 1 to 50.",
            },
          },
        ],
        errorMessage: {
          type: "Please add 2 to 10 participants",
          minItems: "Please add 2 to 10 participants",
          maxItems: "Please add 2 to 10 participants",
        },
      },
      payer: {
        type: "string",
        minLength: 1,
        maxLength: 50,
        errorMessage: {
          type: "Invalid payer name.",
          minLength: "Invalid payer name.",
          maxLength: "Invalid payer name.",
        },
      },
    },
  };

  const validate = ajv.compile(schema);

  validate(req.body);

  if (validate.errors != null) {
    res.locals.errors = validate.errors;
  }
};
