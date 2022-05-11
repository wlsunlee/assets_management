const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const getUser = async (email) => {
    return prisma.$queryRaw`
        select id, password from users where email = ${email}`
}

module.exports = { getUser }