const express = require('express');
const router = express.Router();
const FollowController = require('../controller/follow')
const {authMiddleware} = require('../middleware/admin/auth.middleware')

//完整路径/api/v1/follow

//username留空
router.post('/:username',authMiddleware,FollowController.follow)
router.delete('/:username',authMiddleware, FollowController.unfollow)
router.get('/:username',authMiddleware, FollowController.getFollowers)



module.exports = router