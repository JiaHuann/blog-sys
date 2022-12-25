require('dotenv').config({ path: '.env' })
const express = require('express');
const initServer = require('./src/init/initServer')
const initDB = require('./src/init/initDB');




//实例化




const app = express();




const main = async () => {
    //初始化数据库
    await initDB()
    //启动node服务
    await initServer(app)

}

main()