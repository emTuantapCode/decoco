const { notFound, errorHandler } = require('../middlewares/errorHandler')
const userRoute = require('./user')
const categoryRoute = require('./category')
const productRoute = require('./product')
const initWebRoutes = (app) => {
    app.use('/api/v1/user',userRoute)
    app.use('/api/v1/category',categoryRoute)
    app.use('/api/v1/product',productRoute)

    app.use(notFound)
    app.use(errorHandler)
}

module.exports = initWebRoutes