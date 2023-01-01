//引入配置
require('dotenv').config({ path: '../../.env' })

const jwt = require('jsonwebtoken')

//加签 =》 token
const sign = async (username,email) => {
    //jwt的函数参数看文档 或者 悬浮窗提示
    return new Promise((resolve, reject) => {
        jwt.sign({
            username,
            email
        }, process.env.JWT_SECRET, (err, token) => {
            if (err) {
                reject(err)
            }

            resolve(token)
        })
    })
}


//解签 =》验证
const decode = async (user) => {
    return new Promise((resolve, reject) => {
        jwt.verify(user, process.env.JWT_SECRET, (err, decoded) => {
            if (err) {
                reject(err)
            }
            resolve(decoded)
        })

    })
}

//jwt 加签解签测试
// const test1 = async () => {
//     const data = {
//         username: 'admin',
//         email: 'admin@gmail.com'
//     }
//     const token = await sign(data)
//     console.log('加签测试 token is:', token)

//     const decoded = await decode(token)  //iat是签名发布时间
//     console.log("解签测试 decoded:", decoded)

// }
// test1()

module.exports = { decode, sign }
