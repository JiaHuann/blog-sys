const express = require('express');
const router = express.Router();

//模块化：
//通过/api/v1/user,访问到这里的'/',后续如果在此文件写/user/login，
//其完整路径为/api/v1/user/login
router.get('/', (req, res) => {
    console.log('get data');
    res.json({
        status: 200,     //api响应状态
        message: "success",
        data: {
            code: 1,     //数据请求状态
            message: '请求数据成功',
            data: {
                name: 'hello'
            }
        }
    })
})

router.post('/',(req,res)=>{

})

module.exports = router