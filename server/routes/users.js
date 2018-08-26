const router = require('koa-router')()
const User = require('../controllers/user');

router.prefix('/user')

router.post('/signin',User.signin);


module.exports = router
