const withdrawalDao = require("../models/withdrawalDao");
const errService = require("./errorService");

const withdrawal = async (userId, assetId, blockchainTypeId, withdrawalAddress, quantity, res) => {

    const asset = await getAssetByassetId(assetId, userId);

    if(asset.length < 0) {
        errService.errorHandler(400, "INVALID_ASSET", res);
    }
    if(asset[0].quantity - quantity < 0) {
        errService.errorHandler(400, "LIMIT_QUANTITY", res);
    }
    await withdrawalDao.createWithdrawal(assetId, withdrawalAddress, quantity, blockchainTypeId);
}

const getAssetByassetId = async (assetId, userId) => {
    return await withdrawalDao.getAsset(assetId, userId);
}

module.exports = { withdrawal }