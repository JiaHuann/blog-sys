require('dotenv').config({ path: '.env' })
const express = require('express');
const initServer = require('./src/init/initServer')
const initDB = require('./src/init/initDB');

const app = express();

app.get('/',(req,res)=>{
    res.json({
        name:'hello'
    })
})

app.get('/api/v1/users',(req,res)=>{
    console.log('get data');
    res.json({
        status:200,     //api响应状态
        message:"success",
        data:{
            code:1,     //数据请求状态
            message:'请求数据成功',
            data:{
                name:'hello'
            }
        }
    })
})


const main = async () => {
    //初始化数据库
    await initDB()
    //启动node服务
    await initServer(app)

}

main()