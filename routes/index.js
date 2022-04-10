const router = require("express").Router({ mergeParams: true });

const {
  postSplitData,
  postSplitDataTest,
} = require("../controllers/splitDataController");

router.post("/splitData", postSplitData);
router.post("/splitDataTest", postSplitDataTest);

module.exports = router;
