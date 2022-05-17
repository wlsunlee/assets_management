const express = require("express");
const router = express.Router();

const detailController = require("../controllers/detailController");
const loginAuthMiddleware = require("../middleware/loginAuthMiddleware");

router.get("/", loginAuthMiddleware.loginAuth, detailController.detailList);
router.use("/", detailController.error);

module.exports = router;