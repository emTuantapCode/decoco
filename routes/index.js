const { notFound, errorHandler } = require('../middlewares/errorHandler')

const initWebRoutes = (app) => {


    app.use(notFound)
    app.use(errorHandler)
}

module.exports = initWebRoutes