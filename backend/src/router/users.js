const express = require('express');
const router = express.Router();
const UserController = require('../controller/users')
const {authMiddleware} = require('../middleware/admin/auth.middleware')
//模块化：
//通过/api/v1/users,访问到这里的'/',后续如果在此文件写/user/login，
//其完整路径为/api/v1/user/login

router.get('/get',authMiddleware, UserController.getUser)

router.post('/register',UserController.createUser)

router.post('/login',UserController.userLogin)

router.patch('/update', authMiddleware, UserController.updateUser)

module.exports = router