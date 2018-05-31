const router = require('koa-router')()
const Post = require('../controllers/post');

router.prefix('/post')

router.get('/list',Post.list);
router.post('/add',Post.add);
router.post('/del',Post.del);
router.post('/edit',Post.edit);

module.exports = router
