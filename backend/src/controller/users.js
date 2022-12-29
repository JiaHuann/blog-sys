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
        console.log('111')

        //创建用户
        //1）密码加密
        const md5PWD = await md5Passwd(passwd)

        //2）User model 存储数据库
        console.log('222')
        const user = await User.create({ //调用Sequelize的方法
            username,
            passwd: md5PWD,
            email
        })

        //3）创建成功：返回
        console.log('333')
        let data = {}
        if (user) {
            console.log(user);

            //3.1创建token
            data.username = username
            data.email = email
            data.token = await sign(username, email)
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


//获取用户
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
        console.log(user)
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


        res.status(200).json({
            status: 1,
            data: user.dataValues,
            message: "登陆成功"
        })
    } catch (error) {
        next(error)
    }
}
