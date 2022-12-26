
const errorMiddleware = (error, req, res, next) => {
    //error是 HttpException
    console.log('error handle')
    const status = error.status || 500
    const message = error.message || '服务器错误'
    const errors = error.errors || 'Sever is wrong'

    res.status(status).json({
        code: 0,
        message:message,
        errors:errors
    })
}

module.exports = errorMiddleware