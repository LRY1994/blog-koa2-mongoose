const router = require('koa-router')()
const Post = require('../controllers/post');
const config = require('../config/index');

router.prefix('/post')

router.get('/list',Post.list);
router.get('/detail',Post.detail);
router.get('/delete',Post.del);
// router.delete('/del',Post.del);


router.post('/new',Post.add);
router.post('/update',Post.update);



module.exports = router
