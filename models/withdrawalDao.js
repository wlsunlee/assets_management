const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const getAsset = async (assetId, userId) => {
    return prisma.$queryRaw`
        select
            quantity
        from assets 
        where id = ${assetId} and user_id = ${userId}`
}

const createWithdrawal = async (assetId, withdrawalAddress, quantity, blockchainTypeId) => {
    return prisma.$queryRaw`
        insert into withdrawals(asset_id, withdrawal_address, quantity, status, blockchain_type_id) 
            values(${assetId},${withdrawalAddress},${quantity},'대기',${blockchainTypeId})`
}

module.exports = { getAsset, createWithdrawal }