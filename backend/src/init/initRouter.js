const userRouter = require('../router/users')

const initRouter = (app)=>{
    // app.get('/',(req,res)=>{
    //     res.json({
    //         name:'hello'
    //     })
    // })
    app.use('/api/v1/users',userRouter) //模块化
}

module.exports = initRouter