const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const getAssetList = async (userId) => {
    return prisma.$queryRaw`
        select 
            ats.asset_id,
            co.coin_id,
            co.coin_name,
            ifnull(ats.quantity, 0) quantity,
            co.price,
            co.coins_blockchain_types_id,
            ats.blockchain_type_id,
            co.type_name
        from 
            (select 
                co.id coin_id, 
                cbt.id coins_blockchain_types_id, 
                co.coin_name,
                co.price,
                bt.type_name,
                bt.id blockchain_type_id
            from coins_blockchain_types cbt
            join coins co
            on cbt.coin_id = co.id
            join blockchain_types bt
            on cbt.blockchain_type_id = bt.id
            order by cbt.id) co
        left join 
            (select 
                id asset_id,
                quantity,
                blockchain_type_id, 
                coin_id
            from assets 
            where user_id = ${userId}) ats
        on co.blockchain_type_id = ats.blockchain_type_id and co.coin_id = ats.coin_id
        order by co.coin_id, co.coins_blockchain_types_id
        `
}

const getAssetAddress = async (userId, coinId, blockchainTypeId) => {
    return prisma.$queryRaw`
        select 
            deposit_address 
        from assets 
        where user_id = ${userId} 
        and coin_id = ${coinId} 
        and blockchain_type_id = ${blockchainTypeId}
        `
}

const createAssetAddress = async (userId, coinId, hash, blockchainTypeId) => {
    return prisma.$queryRaw`
        insert into assets(user_id, coin_id, deposit_address, quantity, blockchain_type_id) values(${userId}, ${coinId}, ${hash}, 0, ${blockchainTypeId})
        `
}

const getBlockchainTypeId = async (coins_blockchain_types_id) => {
    return prisma.$queryRaw`
        select blockchain_type_id from coins_blockchain_types where id = ${coins_blockchain_types_id}
        `
}

module.exports = { getAssetList, getAssetAddress, createAssetAddress, getBlockchainTypeId }