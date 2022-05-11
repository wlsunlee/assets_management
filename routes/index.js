const express = require("express");
const router = express.Router();

const testRouter = require('./testRoute');
const userRouter = require('./userRouter');

router.use('/test', testRouter);
router.use('/users', userRouter);

module.exports = router;