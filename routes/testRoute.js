const express = require("express");
const router = express.Router();

const testController = require("../controllers/testController");
const testMiddleware = require("../middleware/loginAuthMiddleware");

router.get("/ping", testController.ping);
router.get("/auth", testMiddleware.loginAuth, testController.ping);
router.post("/auth", testMiddleware.loginAuth, testController.ping);
router.use("/", testController.error);

module.exports = router;