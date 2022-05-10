const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const userDao = require("../models/userDao");
const errService = require("./errorService");

const login = async (email, password, res) => {

    validityCheck(email, password, res);
    
    const user = await getUserByEmail(email, res);

    if(!(bcrypt.compareSync(password, user[0].password))) {
        errService.errorHandler(400, "INVALID_USER", res);
    }    
    const accessToken = jwt.sign({userId : user[0].id}, process.env.SECRET_KEY);
    
    return accessToken;
}

const validityCheck = (email, password, res) => {

    const emailCheck = /^[a-zA-Z0-9._%+-]*@[a-zA-Z0-9.-]*\.[a-zA-Z]{2,3}$/;
    const passwordCheck = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\{\}\[\]\/?.,;:|\)*~`!^\-_+<>@\#$%&\\\=\(\'\"])[A-Za-z\d\{\}\[\]\/?.,;:|\)*~`!^\-_+<>@\#$%&\\\=\(\'\"]{8,100}$/;
    const samePatternCheck = /(\w)\1\1/;

    console.log(!passwordCheck.test(password));
    console.log(samePatternCheck.test(password));

    if(!emailCheck.test(email) || !passwordCheck.test(password) || samePatternCheck.test(password)) {
        errService.errorHandler(400, "INVALID_VALUES", res);
    }
}

const getUserByEmail = async (email, res) => {

    const user = await userDao.getUser(email);

    if(user.length <= 0) {
        errService.errorHandler(400, "INVALID_USER", res);
    }
    return user;
}

module.exports = { login }