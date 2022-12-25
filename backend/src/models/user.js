const {DataTypes} = require('sequelize')
const sequelize = require('../db/sequelize')

const User = sequelize.define('user',{
    email:{
        type:DataTypes.STRING,
        allowNull:false,
        primaryKey:true //每个User唯一的主关键字，用来记录
    },
    username:{
        type:DataTypes.STRING,
        allowNull:false,
        unique:true //不能充复
    },
    passwd:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    avatar:{
        type:DataTypes.TEXT,
        allowNull:true,
    },
    bio:{
        type:DataTypes.STRING,
        allowNull:true,
    }
})