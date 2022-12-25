const sequelize = require('./sequelize')


const dbConnect = async () => {
    return new Promise(async (resolve, reject) => {
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

module.exports = dbConnect