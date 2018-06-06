const router = require('koa-router')()
const Post = require('../controllers/post');

router.prefix('/post')

router.get('/list',Post.list);
router.get('/get',Post.get);
router.get('/del',Post.del);
router.get('/search',Post.search);
router.post('/add',Post.add);

router.post('/edit',Post.edit);

module.exports = router
