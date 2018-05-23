const router = require('koa-router')()
const User = require('../controllers/user');

router.prefix('/user')

router.post('/check',User.check);

router.get('/test',async function(ctx, next) {
    
    ctx.body = 'koa2 string'
    console.log('hahah');
})
module.exports = router
