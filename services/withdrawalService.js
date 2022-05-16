const withdrawalDao = require("../models/withdrawalDao");
const errService = require("./errorService");

const withdrawal = async (userId, assetId, blockchainTypeId, withdrawalAddress, quantity, res) => {

    const asset = await getAssetByassetId(assetId, userId);

    if(asset.length < 0) {
        errService.errorHandler(400, "INVALID_ASSET", res);
    }
    const yetQuantity = await getWithdrawalByassetId(assetId);

    if(asset[0].quantity - (quantity + yetQuantity[0].coins_quantity) < 0) {
        errService.errorHandler(400, "LIMIT_QUANTITY", res);
    }
    await withdrawalDao.createWithdrawal(assetId, withdrawalAddress, quantity, blockchainTypeId);
}

const getAssetByassetId = async (assetId, userId) => {
    return await withdrawalDao.getAsset(assetId, userId);
}

const withdrawalBatch = async (res) => {

    const withdrawalList = await getWithdrawalList();
    const satus = ["진행중", "완료"];

    console.log(`withdrawalBatch total : ${withdrawalList.length}`);

    if(withdrawalList.length <= 0) {
        return
    }
    for(let i = 0; i < withdrawalList.length; i++) {
        await updateSatus(withdrawalList[i].id, satus[0]);
        await updateAsset(withdrawalList[i].asset_id, withdrawalList[i].quantity);
        await updateSatus(withdrawalList[i].id, satus[1]);
    }

}

const getWithdrawalList = async () => {
    return await withdrawalDao.getWithdrawalList();
}

const updateSatus = async (id, satus) => {
    return await withdrawalDao.updateSatus(id, satus);
}

const updateAsset = async (assetId, quantity) => {
    return await withdrawalDao.updateAsset(assetId, quantity);
}

const getWithdrawalByassetId = async (assetId) => {
    return await withdrawalDao.getWithdrawalByassetId(assetId);
}

module.exports = { withdrawal, withdrawalBatch }