const router = require('express').Router()
const ctrls = require('../controllers/category')

router.get('/', ctrls.getCate)

module.exports = router 