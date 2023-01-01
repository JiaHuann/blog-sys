const { validCreateUser, validUserLogin } = require("../utils/valid/user.valid")
const HttpException = require('../exceptions/http.exception')
const User = require('../models/user')
const { md5Passwd, md5MatchPasswd } = require("../utils/bcrypt")
const { sign } = require('../utils/jwt')

//创建，注册用户
//module.exports.xxx边打包边创建  commonJS！！！
module.exports.createUser = async (req, res, next) => {
    //整体异常捕获
    try {
        //获取client提交
        let { username, passwd, email } = req.body.user
        console.log(username, passwd, email)

        //数据验证
        let { error, valid } = validCreateUser(username, passwd, email)//返回两个值
        console.log(valid)
        if (!valid) {
            throw new HttpException(401, '用户提交数据验证失败', error)
        }

        //业务验证
        //1）email是否已存在
        const existEmail = await User.findByPk(email)//用Sequelize封装好的查找器
        if (existEmail) {
            throw new HttpException(401, '用户邮箱已经存在', 'email exist')
        }

        //创建用户
        //1）密码加密
        const md5PWD = await md5Passwd(passwd)

        //2）User model 存储数据库
        const user = await User.create({ //调用Sequelize的方法
            username,
            passwd: md5PWD,
            email
        })

        //3）创建成功：返回
        let data = {}
        if (user) {
            console.log(user);

            //3.1创建token
            data.username = username
            data.email = email
            data.token = await sign(username, email)
            console.log('token创建成功:', data.token)
            data.bio = null
            data.avatar = null

            res.status(201).json({
                status: 1,
                data,
                message: '创建用户成功'
            })
        }
        //整体异常捕获（next统一错误处理）
    } catch (error) {
        next(error)
    }
}


//用户登录
module.exports.userLogin = async (req, res, next) => {
    try {
        //0.验证接口权限（不需要）
        //1.获取请求数据
        let { email, passwd } = req.body.user

        //2.验证请求数据字段、
        let { error, valid } = validUserLogin(email, passwd)
        if (!valid) {
            throw new HttpException(401, '用户登录数据格式有误', 'login data format err')
        }

        //3.验证业务逻辑
        const user = await User.findByPk(email) //如果根据email找到了，则返回相关的全部字段信息
        if (!user) {
            throw new HttpException(401, '用户不存在', 'User not exist')
        }

        //3.1验证密码是否匹配
        const trueMd5pwd = user.passwd
        const match = await md5MatchPasswd(trueMd5pwd, passwd)
        if (!match) {
            throw new HttpException(401, '用户密码错误', 'wrong passwd')
        }

        //4.返回数据（token + data）
        delete user.dataValues.passwd;
        user.dataValues.token = await sign(
            user.dataValues.username,
            user.dataValues.email
        )

        res.status(200).json({
            status: 1,
            data: user.dataValues,
            message: "登陆成功"
        })
    } catch (error) {
        console.log(error)
        next(error)
    }
}


//获取用户信息
module.exports.getUser = async (req, res, next) => {
    try {
        //1.获取请求数据
        const { email } = req.user

        //2.验证email用户是否存在
        const user = await User.findByPk(email)
        if (!user) {
            throw new HttpException(401, '用户不存在', 'User not exist')
        }

        //3.返回数据
        //3.1去除passwd
        delete user.dataValues.passwd
        user.dataValues.token = user.token

        //3.2返回数据
        return res.status(200).json({
            status: 1,
            message: '用户信息请求成功',
            data: user.dataValues
        })
    } catch (e) {
        next(e)
    }
}


//更新用户信息
module.exports.updateUser = async (req, res, next) => {
    try {
        //1.获取请求数据
        const { email } = req.user
        const user = await User.findByPk(email) //如果根据email找到了，则返回相关的全部字段信息
        if (!user) {
            throw new HttpException(401, '用户不存在', 'User not exist')
        }

        //2.修改用户数据
        //2.1获取要修改的数据
        const updateUser = req.body.user
        if (updateUser) {
            //2.2修改字段判断(email主键不让修改)
            const username = updateUser.username ? updateUser.username : user.username
            const bio = updateUser.bio ? updateUser.bio : user.bio
            const avatar = updateUser.avatar ? updateUser.avatar : user.avatar
            //2.3修改密码验证
            let passwd = user.passwd
            if (updateUser.passwd) {
                passwd = await md5Passwd(updateUser.passwd)
            }
            //2.3更新操作
            const updated = await user.update({username,bio,passwd,avatar,bio})
            //3.返回数据（去除passwd,重新发布token）
            delete updated.dataValues.passwd
            updated.dataValues.token = await sign(username,email)
            res.status(200).json({
                status:1,
                message:"数据更新成功",
                data:updated.dataValues
            })
            
        } else {
            throw new HttpException(401, '更新数据不能为空', 'no update Content')
        }


    } catch (error) {
        next(error)
    }
}