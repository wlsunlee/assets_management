const detailService = require("../services/detailService");
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const detailList = async (req, res, next) => {

    try {
        const { userId } = req.headers;

        const { coinId, blockchainTypeId, pageCount, startDate, endDate, detailType, status, search } = req.query;
       
        const detailList = await detailService.detailList(userId, coinId, blockchainTypeId, pageCount, startDate, endDate, detailType, status, search, res);

        res.status(200).json({ status : 200, detailList : detailList });
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

module.exports = { error, detailList }