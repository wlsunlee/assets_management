const withdrawalService = require("../services/withdrawalService");
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const withdrawal = async (req, res, next) => {

    try {
        const { userId } = req.headers;
        const { assetId, blockchainTypeId, withdrawalAddress, quantity } = req.body;
       
        await withdrawalService.withdrawal(userId, assetId, blockchainTypeId, withdrawalAddress, quantity, res);

        res.status(201).json({ status : 201 });
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

module.exports = { error, withdrawal }