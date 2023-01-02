const userRouter = require('../router/users')
const followRouter = require('../router/follow')

const initRouter = (app)=>{
    // app.get('/',(req,res)=>{
    //     res.json({
    //         name:'hello'
    //     })
    // })
    app.use('/api/v1/users',userRouter) //模块化
    app.use('/api/v1/follow',followRouter)
}

module.exports = initRouter