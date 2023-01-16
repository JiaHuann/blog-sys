const express = require('express');
const router = express.Router();
const controller = require('../controller/test')
//模块化：
//通过/api/v1/users,访问到这里的'/',后续如果在此文件写/user/login，
//其完整路径为/api/v1/user/login

router.get('/',controller.helloWorld)



module.exports = router