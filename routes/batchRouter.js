const express = require("express");
const router = express.Router();

const withdrawalBatch = require("../batchs/withdrawalBatch");

router.get("/withdrawal", withdrawalBatch.withdrawalBatch);
router.use("/", withdrawalBatch.error);

module.exports = router;