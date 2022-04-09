const router = require("express").Router({ mergeParams: true });

const { postSplitData } = require("../controllers/splitDataController");

router.post("/splitData", postSplitData);

module.exports = router;
