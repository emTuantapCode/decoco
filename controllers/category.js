const Cate = require('../models/category')
const asyncHandler = require('express-async-handler')

const getCate = asyncHandler(async (req, res) => {
    const response = await Cate.findAll({
        raw: true
    })

    if ( response ) {
        return res.status(200).json({
            success: response ? true : false,
            data: response ? response : null
        })
    } else {
        throw new Error('Has no more category')
    }
})
module.exports = {
    getCate
}