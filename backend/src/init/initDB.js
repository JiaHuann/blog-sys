//引入db模块依赖
const sequelize = require('../db/sequelize')
const dbConnect = require('../db/connnection')


//引入model
const User = require('../models/user')
const Article = require('../models/article')
const Comment = require('../models/comment')
const Tag = require('../models/tag')



//建立模型关系
const initRelation = () => {
    //用户-文章 一对多关系
    User.hasMany(Article, {
        onDelete: 'CASCADE'  //连带删除
    });
    Article.belongsTo(User);

    //文章和标签关系 多对多
    Article.belongsToMany(Tag, {
        through: 'TagList',  //两个关系建立一个复合表
        uniqueKey: false,
        timestamps: false
    });
    Tag.belongsToMany(Article, {
        through: "TagList",
        uniqueKey: false,
        timestamps: false
    });

    //文章-评论关系 一对多
    Article.hasMany(Comment,{
        onDelete:'CASCADE'
    });
    Comment.belongsTo(Article)

    //用户-评论 一对多关系
    User.hasMany(Comment, {
        onDelete: 'CASCADE'
    });;
    Comment.belongsTo(User);

    //用户-文章 多对多关系（喜欢，收藏关系）
    User.belongsToMany(Article, {
        through: 'favorites',
        timestamps: false,
    });
    Article.belongsToMany(User, {
        through: 'favorites',
        timestamps: false,
    });

    //用户-用户 多对多自相连关系 （订阅，粉丝）
    User.belongsToMany(User, {
        through: 'follow',
        as: 'followers'  //暂不明
    });
}



const initDB = () => {
    return new Promise(async (resolve, reject) => {
        //数据库连接
        try {
            await dbConnect()
            //初始化model关系
            initRelation()

            //把model关系同步到数据库
            await sequelize.sync()//使用更新的方法
            resolve()
        } catch (error) {
            console.log(error);
            reject(error);
        }
    })
}

module.exports = initDB