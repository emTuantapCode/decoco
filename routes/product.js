const router = require('express').Router()
const ctrls = require('../controllers/product')

router.get('/all', ctrls.getAllProducts)
router.get('/cate', ctrls.getProductsByCate)
router.get('/multi', ctrls.getProductsFromCart)

module.exports = router 