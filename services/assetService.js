const assetDao = require("../models/assetDao");
const errService = require("./errorService");
const crypto = require("crypto");

const assetList = async (userId, res) => {
    return await assetDao.getAssetList(userId);
}

const assetAddress = async (userId, coinId, coinBlockchainTypeId, blockchainTypeId, res) => {

    let assetAddress = await getAssetAddress(userId, coinId, blockchainTypeId);

    if(assetAddress <= 0) {
        assetAddress = createAssetAddress(userId, coinId, coinBlockchainTypeId, blockchainTypeId);
    }
    return assetAddress;
}

const getAssetAddress = async (userId, coinId, blockchainTypeId) => {
    return await assetDao.getAssetAddress(userId, coinId, blockchainTypeId);
}

const createAssetAddress = async (userId, coinId, coinBlockchainTypeId, blockchainTypeId) => {

    const secret = process.env.ASSET_ADDRESS_KEY;
    const update = Math.random().toString(36).slice(2) + Date.now();
    const hash = crypto.createHmac("sha256", secret)
                        .update(update)
                        .digest("hex");
    
    blockchainTypeId = await assetDao.getBlockchainTypeId(coinBlockchainTypeId);

    await assetDao.createAssetAddress(userId, coinId, hash, blockchainTypeId[0].blockchain_type_id);

    return await getAssetAddress(userId, coinId, blockchainTypeId[0].blockchain_type_id);
}

module.exports = { assetList, assetAddress }