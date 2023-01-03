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
            where: {
                username
            }
        })
        if (!master) {
            throw new HttpException(404, '关注的用户不存在', 'follow an unknown user')
        }

        //3.获取关注者（fans）信息

        const { email } = req.user
        //不需要校验了，因为token已经经过authmiddleware校验了
        const fan = await User.findByPk(email)

        //4.进行关注 关联操作
        await master.addFollowers(fan)

        //5.返回信息（关注状态）
        const profile = {
            username: master.username,
            bio: master.bio,
            avatar: master.avatar,
            following: true
        }

        res.status(200).json({
            status: 1,
            message: '关注成功',
            data: profile
        })

    } catch (e) {
        next(e)
    }
}

//取消关注
module.exports.unfollow = async (req, res, next) => {
    try {
        //1.获取要关注的用户名
        const username = req.params.username

        //2.校验被关注的用户是否存在
        const master = await User.findOne({
            where: {
                username
            }
        })
        if (!master) {
            throw new HttpException(404, '关注的用户不存在', 'follow an unknown user')
        }

        //3.获取关注者（fans）信息

        const { email } = req.user
        //不需要校验了，因为token已经经过authmiddleware校验了
        const fan = await User.findByPk(email)

        //4.进行关注 关联操作
        await master.removeFollowers(fan)

        //5.返回信息（关注状态）
        const profile = {
            username: master.username,
            bio: master.bio,
            avatar: master.avatar,
            following: false
        }

        res.status(200).json({
            status: 1,
            message: '取消关注成功',
            data: profile
        })

    } catch (e) {
        next(e)
    }
}


//获取全部粉丝
module.exports.getFollowers = async (req, res, next) => {
    try {
        //1.获取要关注的用户名
        const username = req.params.username

        //2.1校验被关注的用户是否存在,并获取粉丝信息
        const master = await User.findOne({
            where: {
                username
            },
            include:['followers']   //连表查询
        })
        if (!master) {
            throw new HttpException(404, '关注的用户不存在', 'follow an unknown user')
        }

        //2.2验证token登录用户是否关注
        const {email} = req.user
        let isfollow = false
        let followers = []
        for(const user of master.followers){
            if(email === user.dataValues.email){
                isfollow = true
            }
            delete user.dataValues.passwd
            delete user.dataValues.followers
            followers.push(user.dataValues)
        }
        
        //3.返回
        const profile = {
            username:master.username,
            bio:master.bio,
            avatar:master.avatar,
            isfollow,
            followers
        }

        res.status(200).json({
            status:1,
            message:"获取fans成功",
            data:profile
        })

    } catch (e) {
        next(e)
    }
}