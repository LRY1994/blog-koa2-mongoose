const router = require('koa-router')()
const User = require('../controllers/user');

router.prefix('/user')

router.post('/check',User.check);


module.exports = router
