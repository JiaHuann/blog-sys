const {DataTypes} = require('sequelize')
const sequelize = require('../db/sequelize')

const User = sequelize.define('User',{
    email:{ //邮箱
        type:DataTypes.STRING,
        allowNull:false,
        primaryKey:true //每个User唯一的主关键字，用来记录
    },
    username:{  //用户名
        type:DataTypes.STRING,
        allowNull:false,
        unique:'username' //不能重复
    },
    passwd:{    //密码
        type:DataTypes.STRING,
        allowNull:false,
    },
    avatar:{    //头像
        type:DataTypes.TEXT,
        allowNull:true,
    },
    bio:{   //个人简介
        type:DataTypes.TEXT,
        allowNull:true,
    }
})

module.exports = User