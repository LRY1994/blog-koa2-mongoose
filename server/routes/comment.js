const router = require('koa-router')()
const Comment = require('../controllers/comment');

router.prefix('/user')

router.post('/signin',Comment.signin);


module.exports = router
