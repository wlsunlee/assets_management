const assetService = require("../services/assetService");
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const assetList = async (req, res, next) => {

    try {
        const { userId } = req.headers;

        const assetList = await assetService.assetList(userId, res);

        res.status(200).json({ status : 200, assetList : assetList });
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

module.exports = { error, assetList }