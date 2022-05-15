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

const getWithdrawalList = async () => {
    return prisma.$queryRaw`
        select id, asset_id, quantity from withdrawals where status = '대기' order by id`
}

const updateSatus = async (id, satus) => {
    return prisma.$queryRaw`
        update withdrawals set status = ${satus}, update_at=now() where id = ${id}`
}

const updateAsset = async (assetId, quantity) => {
    return prisma.$queryRaw`
        update 
            assets ats,
            (select quantity from assets where id = ${assetId}) bats 
        set ats.quantity = bats.quantity - ${quantity}, ats.update_at=now() 
        where ats.id = ${assetId}`
}

module.exports = { getAsset, createWithdrawal, getWithdrawalList, updateSatus, updateAsset }