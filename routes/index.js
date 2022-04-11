const router = require("express").Router({ mergeParams: true });

const {
  postSplitData,
  postSplitDataTest,
  getSplitData,
  deleteSplitData,
} = require("../controllers/splitDataController");

router.post("/splitData", postSplitData);
router.post("/splitDataTest", postSplitDataTest);
router.get("/splitData", getSplitData);
router.patch("/splitData", deleteSplitData);

module.exports = router;
