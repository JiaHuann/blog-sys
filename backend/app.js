require('dotenv').config({ path: '.env' })
const express = require('express');
const { Sequelize } = require('sequelize');


const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USERNAME, process.env.DB_PASSWD, {
    host: process.env.DB_HOST,
    dialect: 'mysql',
    port: process.env.DB_PORT,
    logging: false
})
//实例化


const dbConnect = async () => {
    return new Promise(async(resolve, reject) => {
        try {
            await sequelize.authenticate();//测试数据库连接成功没
            console.log('Connection has been established successfully.');
            resolve()
        } catch (error) {
            console.error('Unable to connect to the database:', error);
            reject(error)
        }
    })
}

const app = express();




const initServer = async () => {
    return new Promise((resolve, reject) => {
        const PORT = process.env.PORT || 8080 //从.env引入或者默认
        app
            .listen(PORT, () => {
                console.log(`Server is running now on http://localhost:${PORT}`);
                resolve()
            })
            .on('error', (error) => {
                console.log(error);
                reject()
            })
    })
}


const main = async () => {
    //启动数据库
    await dbConnect()
    //启动node
    await initServer()

}

main()