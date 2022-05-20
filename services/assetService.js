const assetDao = require("../models/assetDao");
const errService = require("./errorService");
const crypto = require("crypto");

const assetList = async (userId, res) => {
    return await assetDao.getAssetList(userId);
}

const assetAddress = async (userId, coinId, blockchainTypeId, res) => {

    if(!coinId || !blockchainTypeId) {
        errService.errorHandler(400, "UNDEFINED_VALUE", res);
    }

    let assetAddress = await getAssetAddress(userId, coinId, blockchainTypeId);

    if(assetAddress <= 0) {
        assetAddress = createAssetAddress(userId, coinId, blockchainTypeId);
    }
    return assetAddress;
}

const getAssetAddress = async (userId, coinId, blockchainTypeId) => {
    return await assetDao.getAssetAddress(userId, coinId, blockchainTypeId);
}

const createAssetAddress = async (userId, coinId, blockchainTypeId) => {

    const secret = process.env.ASSET_ADDRESS_KEY;
    const update = Math.random().toString(36).slice(2) + Date.now();
    const hash = crypto.createHmac("sha256", secret)
                        .update(update)
                        .digest("hex");

    await assetDao.createAssetAddress(userId, coinId, hash, blockchainTypeId);

    return await getAssetAddress(userId, coinId, blockchainTypeId);
}

module.exports = { assetList, assetAddress }