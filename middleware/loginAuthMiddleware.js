const jwt = require("jsonwebtoken");
const errService = require("../services/errorService");

const loginAuth = async (req, res, next) => {

    try {
        const access_token = Object.keys(req.body).length === 0 ? req.headers.access_token : req.body.access_token;
        
        jwt.verify(access_token, process.env.SECRET_KEY, 

            (error, decode) => {

                if(!!error) {
                    console.error(error);
                    errService.errorHandler(401, "INVALID_TOKEN", res);
                }else {
                    req.headers.userId = decode.userId;
                }
        });
        
        next();
    } catch (error) {
        next(error);
    }
}

const error = (err, req, res, next) => {
    console.error(err);
}

module.exports = { error, loginAuth }