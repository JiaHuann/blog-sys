const dbConnect = require('../db/connnection')

const User = require('../models/user')
const Article = require('../models/Article')
const Comment = require('../models/Comment')
const Tag = require('../models/Tag')

const initRelation = ()=>{

}

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