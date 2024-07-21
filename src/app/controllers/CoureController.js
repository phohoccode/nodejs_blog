const Course = require('../models/Course')

class CourseController {
    async show(req, res) {
        try {
            const course =
                await Course.findOne({ slug: req.params.slug }).lean()
            res.render(
                'courses/show', { course })
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
            formData.image = 
                `https://i.ytimg.com/vi/${req.body.videoId}/hqdefault.jpg`;
                console.log(formData);
            const course = 
                new Course(formData);
            await course.save();
            res.redirect('/')
        } catch (error) {
            res.status(500).send('Server error');
        }
    }
}

module.exports = new CourseController