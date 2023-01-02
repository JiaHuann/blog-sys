//const { validCreateUser, validUserLogin } = require("../utils/valid/user.valid")
const HttpException = require('../exceptions/http.exception')
const User = require('../models/user')
const { md5Passwd, md5MatchPasswd } = require("../utils/bcrypt")
const { sign } = require('../utils/jwt')



//添加关注
module.exports.follow = async (req, res, next) => {
    try {
        //1.获取要被关注的用户名
        const username = req.params.username

        //2.校验被关注的用户是否存在
        const master = await User.findOne({
            where:{
                username
            }
        })
        if(!master){
            throw new HttpException(404,'被关注的用户不存在','follow an unknown user')
        }

        //3.获取关注者（fans）信息
        
        const {email} = req.user
        //不需要校验了，因为token已经经过authmiddleware校验了
        const fan = await User.findByPk(email)
        
        //4.进行关注 关联操作
        const finish = await master.addFollowers(fan)
        console.log(finish)
        
        //5.返回信息（关注状态）
        const profile = {
            username:master.username,
            bio:master.bio,
            avatar:master.avatar,
            following:true
        }

        res.status(200).json({
            status:1,
            message:'关注成功',
            data:profile
        })

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