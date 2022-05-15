const cron = require('node-cron');
const withdrawalService = require("../services/withdrawalService");
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const withdrawalBatch = async (req, res, next) => {

    try {

        cron.schedule("* * * * *", async () => {
            console.log(`------ withdrawalBatch begin ------`);
            await withdrawalService.withdrawalBatch(res);
            console.log(`------ withdrawalBatch end ------`);
        });
        
        res.status(200).json({ status : 200 });
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

module.exports = { error, withdrawalBatch }