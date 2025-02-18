const Course = require('../models/Course');
const { mongooseToObject } = require('../../util/mongoose');


class CourseController {

      // [GET] /course/:slug
      async show(req, res) {
            let course = await Course.findOne({ slug: req.params.slug });
            if (course) {
                  res.render('courses/detail_course', {
                        course: mongooseToObject(course)
                  });
            } else {
                  res.render('404');
            }

      }

      // [GET] /course/create
      create(req, res) {
            res.render('courses/create_course');
      }

      // [POST] /course/store

      async store(req, res) {
            try {
                  let course = new Course(req.body);
                  await course.save();
                  res.redirect('/');
            } catch (error) {
                  console.log(error);
            }
      }

      // [GET] /course/:id/edit
      async edit(req, res) {
            try {
                  let course = await Course.findOne({ _id: req.params.id });
                  res.render('courses/edit_course', {
                        course: mongooseToObject(course)
                  });
            } catch (error) {
                  console.log(error);
            }
      }

      // [PUT] /course/:id
      async update(req, res) {
            try {
                  await Course.updateOne({ _id: req.params.id }, req.body);
                  res.redirect('/me/stored/courses');
            } catch (error) {
                  console.log(error);
            }
      }

      // [DELETE] /course/:id/delete
      async destroy(req, res) {
            console.log(req.params.id);
            try {
                  await Course.deleteOne({ _id: req.params.id });

                  res.redirect('back');

            } catch (error) {
                  console.log(error);
            }
      }

}

module.exports = new CourseController;