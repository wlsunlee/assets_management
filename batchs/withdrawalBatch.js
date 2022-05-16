const cron = require('node-cron');
const withdrawalService = require("../services/withdrawalService");
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const withdrawalCron = cron.schedule("* * * * *", async () => {
    console.log(`------ withdrawalBatch begin ------`);
    await withdrawalService.withdrawalBatch(res);
    console.log(`------ withdrawalBatch end ------`);
}, {
    scheduled: false
});

const withdrawalBatch = async (req, res, next) => {

    try {
        withdrawalCron.start();
        
        res.status(200).json({ status : 200, message : "BATCH_START" });
    } catch (error) {
        next(error);
        await prisma.$disconnect();
    } finally {
        await prisma.$disconnect();
    }
}

const stopWithdrawalBatch = async (req, res, next) => {

    try {
        withdrawalCron.stop();
        console.log(`------ withdrawalBatch stop ------`);
        
        res.status(200).json({ status : 200, message : "BATCH_STOP" });
    } catch (error) {
        next(error);
        await prisma.$disconnect();
    } finally {
        await prisma.$disconnect();
    }
}

const error = (err, req, res, next) => {
    console.error(err);
}

module.exports = { error, withdrawalBatch, stopWithdrawalBatch }