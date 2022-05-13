const express = require("express");
const router = express.Router();

const testRouter = require('./testRoute');
const userRouter = require('./userRouter');
const assetRouter = require('./assetRouter');

router.use('/test', testRouter);
router.use('/users', userRouter);
router.use('/assets', assetRouter);

module.exports = router;