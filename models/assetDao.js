const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const getAssetList = async (userId) => {
    return prisma.$queryRaw`
        select 
            co.coin_id,
            co.coin_name,
            ifnull(ats.quantity, 0) quantity,
            co.price,
            co.coins_blockchain_types_id,
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
                quantity,
                blockchain_type_id, 
                coin_id
            from assets 
            where user_id = ${userId}) ats
        on co.blockchain_type_id = ats.blockchain_type_id and co.coin_id = ats.coin_id
        order by co.coin_id, co.coins_blockchain_types_id
        `
}

module.exports = { getAssetList }