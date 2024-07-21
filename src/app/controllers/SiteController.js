const Course = require('../models/Course')

class SiteController {

    async home(req, res) {
        try {
            const course =
                await Course.find({}).lean()
            console.log(course);
            res.render('home', { course })
        } catch (error) {
            console.log(error)
        }
    }

    search(req, res) {
        res.render('search')
    }

}

module.exports = new SiteController