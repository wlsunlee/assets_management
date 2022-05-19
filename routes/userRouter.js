const express = require("express");
const router = express.Router();

const userController = require("../controllers/userController");
const loginAuthMiddleware = require("../middleware/loginAuthMiddleware");

router.post("/login", userController.login);
router.get("/info", loginAuthMiddleware.loginAuth, userController.info);
router.use("/", userController.error);

module.exports = router;