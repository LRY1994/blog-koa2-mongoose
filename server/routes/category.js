const router = require('koa-router')()
const Category = require('../controllers/category');


router.prefix('/category')

router.get('/list',Category.list);
router.delete('/del',Category.del);
router.post('/new',Category.save);

module.exports = router
