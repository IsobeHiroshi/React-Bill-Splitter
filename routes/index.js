const router = require("express").Router({ mergeParams: true });

const {
  postSplitData,
  postSplitDataTest,
  getSplitData,
} = require("../controllers/splitDataController");

router.post("/splitData", postSplitData);
router.post("/splitDataTest", postSplitDataTest);
router.get("/splitData", getSplitData);

module.exports = router;
