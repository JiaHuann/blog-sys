//const { validCreateUser, validUserLogin } = require("../utils/valid/user.valid")
const HttpException = require('../exceptions/http.exception')
const User = require('../models/user')
const { md5Passwd, md5MatchPasswd } = require("../utils/bcrypt")
const { sign } = require('../utils/jwt')



//添加关注
module.exports.follow = async (req, res, next) => {
    try {

    } catch (e) {
        next(e)
    }
}

//取消关注
module.exports.unfollow = async (req, res, next) => {
    try {

    } catch (e) {
        next(e)
    }
}


//获取全部粉丝
module.exports.getFollowers = async (req, res, next) => {
    try {

    } catch (e) {
        next(e)
    }
}