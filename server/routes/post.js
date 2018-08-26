const router = require('koa-router')()
const Post = require('../controllers/post');


router.prefix('/post')

router.get('/list',Post.list);
router.get('/get',Post.get);
router.get('/delete',Post.del);
// router.delete('/del',Post.del);


router.post('/new',Post.add);
router.post('/update',Post.update);



module.exports = router
