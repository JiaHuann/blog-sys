require('dotenv').config({ path: '.env' })
const express = require('express');
const initServer = require('./src/init/initServer')
const initDB = require('./src/init/initDB');
const initRouter = require('./src/init/initRouter')

const cors = require('cors')    //应用级中间件（跨域共享）
const morgan = require('morgan') //日志中间件
const app = express();


//中间件
app.use(cors({credentials:true, origin:true}))//跨域
app.use(express.json())
app.use(morgan('tiny')) //http请求日志

//初始化路由
initRouter(app)

const main = async () => {
    //初始化数据库
    await initDB()
    //启动node服务
    await initServer(app)

}

main()