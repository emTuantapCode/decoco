const express = require('express')
const dbConnect = require('./configs/connDB')
const initWebRoutes = require('./routes')

require('dotenv').config()

const app = express()
const port = process.env.PORT || 8888
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

dbConnect()
initWebRoutes(app)

// Run server
app.listen(port, (err) => {
    if (!err) {
        console.log('Server is running on the port: ' + port)
    } else {
        console.log('Server not fine')
    }
})