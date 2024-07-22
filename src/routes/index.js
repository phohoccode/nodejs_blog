const newsRouter = require('./news')
const siteRouter = require('./site')
const courseRouter = require('./course')
const meController = require('./me')

function route(app) {
    app.use('/news', newsRouter)
    app.use('/me', meController)
    app.use('/courses', courseRouter)
    app.use('/', siteRouter)
}

module.exports = route