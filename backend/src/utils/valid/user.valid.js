const validator = require('validator')

module.exports.validCreateUser = (username, passwd, email) => {
    //把不同字段错误合并到一个error里
    let error = {}

    if (validator.default.isEmpty(username)) {
        error.username = '用户名不能为空'
    }
    if (validator.default.isEmpty(passwd)) {
        error.passwd = '密码不能为空'
    }
    if (validator.default.isEmpty(email) && validator.default.isEmail(email)) {
        error.email = '邮箱格式不对或为空'
    }
    //没字段。(error是空的)，则没有错误，result比较后返回true
    let result = Object.keys(error).length < 1  

    return {error, result}
}