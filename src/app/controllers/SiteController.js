const Course = require('../models/Course')

class SiteController {

    // [GET] /
    async home(req, res) {
        try {
            const course = await Course.find({}).lean()
            if (course) {
                console.log(course);
                res.render('home', { course })
            }
        } catch (error) {
            console.log(error)
        }
    }

    // [GET] /search
    search(req, res) {
        res.render('search')
    }

}

module.exports = new SiteController