const express = require("express");
const router = express.Router();

const testRouter = require('./testRoute');
const userRouter = require('./userRouter');
const assetRouter = require('./assetRouter');
const withdrawalRouter = require('./withdrawalRouter');

router.use('/test', testRouter);
router.use('/users', userRouter);
router.use('/assets', assetRouter);
router.use('/withdrawals', withdrawalRouter);

module.exports = router;