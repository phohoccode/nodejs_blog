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
            const course =
                new Course(formData);
            await course.save();
            res.redirect('/')
        } catch (error) {
            res.status(500).send('Server error');
        }
    }

    async edit(req, res) {
        try {
            const course = 
                await Course
                    .findById(req.params.id).lean()
            res.render('courses/edit', { course })
        } catch (error) {
            console.log(error);
        }
    }

    async update(req, res) {
        try {
            const course =
                await Course.updateOne({ _id: req.params.id }, req.body)
            res.redirect('/me/stored/courses')
        } catch (error) {
            console.log(error);
        }
    }

    async delete(req, res) {
        try {
            const course = 
                await Course.deleteOne({ _id: req.params.id })
            res.redirect('back')            
        } catch (error) {
            console.log(error)
        }
    }
}

module.exports = new CourseController