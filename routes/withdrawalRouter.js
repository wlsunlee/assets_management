const express = require("express");
const router = express.Router();

const withdrawalController = require("../controllers/withdrawalController");
const loginAuthMiddleware = require("../middleware/loginAuthMiddleware");

router.post("/", loginAuthMiddleware.loginAuth, withdrawalController.withdrawal);
router.use("/", withdrawalController.error);

module.exports = router;