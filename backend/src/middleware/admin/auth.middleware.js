const HttpException = require("../../exceptions/http.exception")
const { decode } = require('../../utils/jwt')

module.exports.authMiddleware = async (req, res, next) => {
    //console.log('----AuthMiddleware 收到请求头：-----\n',req.headers)

    //1.获取auth的header
    const authHeader = req.headers.authorization
    if (!authHeader) {
        return next(new HttpException(401, '未提供 authorization', 'miss authorize'))
    }

    //2.验证auth类型是否为token
    const authType = authHeader.split(' ')[0]
    const authContent = authHeader.split(' ')[1]

    if (authType != 'Token') {
        return next(new HttpException(401, 'authorization格式错误', 'auth type is not token'))
    }

    //3.验证token内容
    if (!authContent) {
        return next(new HttpException(401, 'authorization格式错误', 'auth type is not token'))
    }

    //4.token解签
    try {
        const user = await decode(authContent)
        //console.log(user)
        if (!user) {
            return next(new HttpException(401, 'token不存在', 'token not exist'))
        }
        req.user = user //req追加
        req.token = authContent
        //console.log('解签后request:',req)
        return next()
    } catch (e) {
        //jwt验证失败
        return next(new HttpException(401, 'auth验证失败', e.message))
    }
}