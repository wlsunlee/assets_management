const cron = require('node-cron');
const errService = require("../services/errorService");

const withdrawalBatch = async (req, res, next) => {

    try {
        cron.schedule("* * * * *", () => {
            console.log('test log');
        });
    } catch (error) {
        next(error);
    }
}

const error = (err, req, res, next) => {
    console.error(err);
}

module.exports = { error, withdrawalBatch }