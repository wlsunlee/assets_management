const express = require("express");
const router = express.Router();

const assetController = require("../controllers/assetController");
const loginAuthMiddleware = require("../middleware/loginAuthMiddleware");

router.get("/", loginAuthMiddleware.loginAuth, assetController.assetList);
router.post("/address", loginAuthMiddleware.loginAuth, assetController.assetAddress);
router.use("/", assetController.error);

module.exports = router;