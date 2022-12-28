const { validCreateUser } = require("../utils/valid/user.valid")
const HttpException = require('../exceptions/http.exception')
const User = require('../models/user')
const { md5Passwd } = require("../utils/bcrypt")
const { sign } = require('../utils/jwt')

//创建用户
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
            throw new HttpException(422, '用户已经存在', error)
        }
        //业务验证
        //1）email是否已存在
        const existUser = await User.findByPk(email)//用Sequelize封装好的查找器
        if (existUser) {
            throw new HttpException(422, '用户邮箱已经存在', 'email exist')
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
module.exports.getUser = async (req, res) => {
    res.status(200)
        .json({
            code: 1,     //数据请求状态
            message: "success",
            data: {

                message: '请求数据成功',
                data: {
                    name: 'Liujiahuan',
                    age: 19
                }
            }

        })
}
