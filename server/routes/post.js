// const router = require('koa-router')()
const Post = require('../controllers/post');

const Router = require('koa-router');
const router = new Router({prefix:'/post'});

router.get('/list',Post.list);
router.get('/get',Post.get);
router.get('/delete',Post.del);
// router.delete('/del',Post.del);


router.post('/new',Post.new);
router.post('/update',Post.update);



module.exports = router
