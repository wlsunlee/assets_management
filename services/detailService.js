const detailDao = require("../models/detailDao");
const errService = require("./errorService");

const detailList = async (userId, coinId, blockchainTypeId, pageCount, startDate, endDate, detailType, status, search, res) => {

    const data = dataRepackage(pageCount, search, res);

    return await detailDao.getDetailList(userId, coinId, blockchainTypeId, data.offset, startDate, endDate, detailType, status, data.search);
}

const detailTotalPageCount = async (userId, coinId, blockchainTypeId, pageCount, startDate, endDate, detailType, status, search, res) => {

    const data = dataRepackage(pageCount, search, res);

    return await detailDao.getDetailTotalPageCount(userId, coinId, blockchainTypeId, data.offset, startDate, endDate, detailType, status, data.search);
}

const dataRepackage = (pageCount, search, res) => {

    let offset = !!pageCount ? ((pageCount - 1) * 20) -1 : undefined;

    offset <= 0 ? offset = 0 : false;
    !!search ? search = "%" + search + "%" : false;
    
    let data = {
        "offset" : offset,
        "search" : search
    }

    return data;
}

module.exports = { detailList, detailTotalPageCount }