const Course = require('../models/Course')

class MeController {
    async storedCourses(req, res) {
        try {
            const [countCoursesDeleted, courses] = await Promise.all([
                Course.countDocumentsWithDeleted({ deleted: true }),
                Course.find({}).lean()
            ]);
    
            res.render('me/storedCourses', {
                courses,
                countCoursesDeleted
            });
        } catch (error) {
            console.log(error);
        }
    }    

    async trashCourses(req, res) {
        try {
            const courses =
                await Course.findWithDeleted({
                    deleted: true
                }).lean()
            res.render('me/trashCourses', { courses })
        } catch (error) {
            console.log(error);
        }
    }

}

module.exports = new MeController