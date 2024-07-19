const Course = require('../models/Course')

class CourseController {
    // [GET] /khoa-hoc/:slug
    async show(req, res) {
        try {
            const course = await Course.findOne({ slug: req.params.slug }).lean()
            if (course) {
                console.log(course);
                res.render('courses/show', { course })
            }
        } catch (error) {
            console.log(error);
        }
    }

    create(req, res) {
        res.render('courses/create')
    }

    async store(req, res) {
        try {
            const formData = req.body;
            formData.image = `https://i.ytimg.com/vi/${req.body.videoId}/hqdefault.jpg`;
            const course = new Course(formData);
            await course.save();
            res.redirect('/')
        } catch (error) {
            console.error(error);
            res.status(500).send('Server error');
        }
    }
}

module.exports = new CourseController