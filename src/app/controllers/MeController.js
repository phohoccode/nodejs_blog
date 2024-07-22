const Course = require('../models/Course')

class MeController {
    async storedCourses(req, res) {
        try {
            const courses =
                await Course.find({}).lean()
            res.render('me/storedCourses', { courses })
        } catch (error) {
            console.log(error);
        }
    }
}

module.exports = new MeController