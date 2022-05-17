const { PrismaClient, Prisma } = require("@prisma/client");

const prisma = new PrismaClient();

const getDetailList = async (userId, coinId, blockchainTypeId, offset, startDate, endDate, detailType, status, search) => {
    return prisma.$queryRaw`
        select
            @rownum := @rownum + 1 row_id,
            his.detail_type,
            his.coin_name,
            his.type_name,
            his.quantity,
            his.price,
            his.status,
            his.address,
            his.update_at
        from 
            (select
                '출금' detail_type,
                co.coin_name,
                (select bt.type_name from blockchain_types bt where bt.id = ws.blockchain_type_id) type_name,
                ws.quantity,
                co.price,
                ws.status,
                ws.withdrawal_address address,
                date_format(ws.update_at, '%Y.%m.%d %h:%m') update_at,
                ats.coin_id,
                ws.blockchain_type_id
            from withdrawals ws
            join assets ats
            on ws.asset_id = ats.id
            join coins co
            on ats.coin_id = co.id
            where ats.user_id = ${userId}
            union all
            select
                '입금' detail_type,
                co.coin_name,
                (select bt.type_name from blockchain_types bt where bt.id = ds.blockchain_type_id) type_name,
                ds.quantity,
                co.price,
                ds.status,
                ats.deposit_address address,
                date_format(ds.update_at, '%Y.%m.%d %h:%m') update_at,
                ats.coin_id,
                ds.blockchain_type_id
            from deposits ds
            join assets ats
            on ds.asset_id = ats.id
            join coins co
            on ats.coin_id = co.id
            where ats.user_id = ${userId}) his,
            (select @rownum:=0) rownum
        where 1=1        
        ${
            (!!coinId && !!blockchainTypeId) ? 
            `and his.coin_id = 1
            and his.blockchain_type_id = 2` 
            : 
            Prisma.empty
        }
        ${(!!startDate && !!endDate) ? `and date(his.update_at) between ${startDate} and ${endDate}` : Prisma.empty}
        ${!!detailType ? `and his.detail_type = ${detailType}` : Prisma.empty}
        ${!!status ? `and his.status = ${status}` : Prisma.empty}
        ${!!search ? `and his.coin_name like '%${search}%'` : Prisma.empty}
        order by his.update_at desc
        limit 20 offset ${offset}
        `
}

module.exports = { getDetailList }