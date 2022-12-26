//创建用户
//module.exports.xxx边打包边创建  commonJS！！！
module.exports.createUser = async () => {
    router.get('/', (req, res) => {
        //console.log('get data');
        res.json({
            status: 200,     //api响应状态
            message: "success",
            data: {
                code: 1,     //数据请求状态
                message: '请求数据成功',
                data: {
                    name: 'hello'
                }
            }
        })
    })
}


//获取用户
module.exports.getUser = async () => {
    router.get('/', (req, res) => {
        //console.log('get data');
        res.json({
            status: 200,     //api响应状态
            message: "success",
            data: {
                code: 1,     //数据请求状态
                message: '请求数据成功',
                data: {}  
            }
        })
    })
}

