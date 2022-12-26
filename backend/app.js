require('dotenv').config({ path: '.env' })
const express = require('express');
const initServer = require('./src/init/initServer')
const initDB = require('./src/init/initDB');
const initRouter = require('./src/init/initRouter')
const app = express();

//初始化路由
initRouter(app)

const main = async () => {
    //初始化数据库
    await initDB()
    //启动node服务
    await initServer(app)

}

main()