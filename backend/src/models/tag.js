const {DataTypes} = require('sequelize')
const sequelize = require('../db/sequelize')


const Tags = sequelize.define('Tags', {
    name: {    //内容
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true
    },
},{
    timestamps:false
})

module.exports = Tags