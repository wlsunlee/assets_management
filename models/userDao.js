const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const getUser = async (email) => {
    return prisma.$queryRaw`
        select id, password from users where email = ${email}`
}

const getUserEmail = async (userId) => {
    return prisma.$queryRaw`
        select email from users where id = ${userId}`
}

module.exports = { getUser, getUserEmail }