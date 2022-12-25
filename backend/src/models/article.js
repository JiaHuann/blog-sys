const { DataTypes } = require('sequelize')
const sequelize = require('../db/sequelize')

const Article = sequelize.define('article', {
    slug: { //别名
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
    },
    title: {  //题目编号
        type: DataTypes.INTEGER,
        allowNull: false,
        
    },
    description: {    //题目内容
        type: DataTypes.TEXT,
    },
    body: {    //内容
        type: DataTypes.TEXT,
        allowNull: false,
    }
})