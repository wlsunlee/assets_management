const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const server = require("../server");
const data = require("./data/testsData");

const userTest = require("./users");
const assetTest = require("./assets");
const withdrawalTest = require("./withdrawals");
//const detailTest = require("./details");

beforeAll(async () => {
    await prisma.user.create({
        data : data.testsData.users[0]
    }); 
    await prisma.coin.createMany({
        data : data.testsData.coins
    });
    await prisma.blockchain_Type.createMany({
        data : data.testsData.blockchain_types
    });
    await prisma.coin_Blockchain_Type.createMany({
        data : data.testsData.coins_blockchain_types
    });
    await prisma.asset.createMany({
        data : data.testsData.assets
    }); 
    await prisma.deposit.createMany({
        data : data.testsData.deposits
    }); 
    await prisma.withdrawal.createMany({
        data : data.testsData.withdrawals
    }); 
});

afterAll(async () => {
    await prisma.withdrawal.deleteMany();
    await prisma.deposit.deleteMany();
    await prisma.asset.deleteMany();
    await prisma.coin_Blockchain_Type.deleteMany();
    await prisma.user.deleteMany();
    await prisma.coin.deleteMany();
    await prisma.blockchain_Type.deleteMany();

    await server.close();
    await prisma.$disconnect();
});

userTest.userTest();
assetTest.assetTest();
withdrawalTest.withdrawalTest();
//detailTest.detailTest();
