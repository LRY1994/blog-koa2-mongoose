const router = require('koa-router')()
const Post = require('../controllers/post');

router.prefix('/post')

router.get('/list',Post.list);
router.get('/get',Post.get);
router.get('/del',Post.del);
router.post('/add',Post.add);

router.post('/edit',Post.edit);

module.exports = router
