const assetDao = require("../models/assetDao");
const errService = require("./errorService");

const assetList = async (userId, res) => {
    return await assetDao.getAssetList(userId);
}

module.exports = { assetList }