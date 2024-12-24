const Product = require('../models/product')
const asyncHandler = require('express-async-handler')

const getAllProducts = asyncHandler(async (req, res) => {
    const response = await Product.findAll({
        raw: true
    })

    if ( response ) {
        return res.status(200).json({
            success: response ? true : false,
            data: response ? response : null
        })
    } else {
        throw new Error('Has no more product')
    }
})

const getProductsByCate = asyncHandler(async (req, res) => {
    if ( ! req.body.cat ) throw new Error('Category code is required')
    const response = await Product.findAll({
        where: {
            categoryCode: req.body.cat
        },
        raw: true
    })

    if ( response ) {
        return res.status(200).json({
            success: response ? true : false,
            data: response ? response : null
        })
    } else {
        throw new Error('Has no more product on that category')
    }
})

const getProductsFromCart = asyncHandler(async (req, res) => {
    const { ids } = req.body
    if (!Array.isArray(ids) || ids.length === 0) throw new Error('Invalid request')

    const response = await Product.findAll({
      where: {
        id: ids,
      },
      raw: true,
    });

    if ( response ) {
        return res.status(200).json({
            success: response ? true : false,
            data: response ? response : null
        })
    } else {
        throw new Error('Has no more product on that cart')
    }
})
module.exports = {
    getAllProducts,
    getProductsByCate,
    getProductsFromCart
}