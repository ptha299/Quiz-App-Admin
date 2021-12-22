const siteRouter = require('./SiteController')

function route(app) {
   app.use('/', siteRouter)
}

module.exports = route