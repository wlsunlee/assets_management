const detailDao = require("../models/detailDao");
const errService = require("./errorService");

const detailList = async (userId, coinId, blockchainTypeId, pageCount, startDate, endDate, detailType, status, search, res) => {

    let offset = ((pageCount - 1) * 20) -1;

    offset <= 0 ? offset = 0 : false

    return await detailDao.getDetailList(userId, coinId, blockchainTypeId, offset, startDate, endDate, detailType, status, search);
}

module.exports = { detailList }