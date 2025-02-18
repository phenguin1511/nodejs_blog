const Course = require('../models/Course');
const { mutipleMongooseToObject } = require('../../util/mongoose');


class MeController {

      // [GET] /me/stored/courses
      async storedCourses(req, res) {
            try {
                  let courses = await Course.find({});
                  res.render('me/stored-courses', {
                        courses: mutipleMongooseToObject(courses)
                  });
            } catch (error) {
                  console.log(error);
            }
      }

}

module.exports = new MeController;