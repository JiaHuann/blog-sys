const dbConnect = require('../db/connnection')



const initDB = () => {
    return new Promise(async(resolve, reject) => {
        //数据库连接
        try {
            await dbConnect()
            resolve()
        } catch (error) {
            console.log(error);
            reject(error);
        }

        //初始化 相关 操作？


    })
}

module.exports = initDB