const userService = require("../services/userService");
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const login = async (req, res, next) => {

    try {
        const { email, password } = req.body;

        const accessToken = await userService.login(email, password, res);

        res.status(200).json({ status : 200, access_token : accessToken });
    } catch (error) {
        next(error);
        await prisma.$disconnect();
    } finally {
        await prisma.$disconnect();
    }

}

const info = async (req, res, next) => {

    try {
        const { userId } = req.headers;

        const userEmail = await userService.info(userId, res);

        res.status(200).json({ status : 200, userEmail : userEmail });
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

module.exports = { error, login, info }