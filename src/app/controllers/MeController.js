const Course = require('../models/Course');
const { mutipleMongooseToObject } = require('../../util/mongoose');


class MeController {

      // [GET] /me/stored/courses
      async storedCourses(req, res) {
            try {
                  let coursesDeleted = await Course.countDocumentsDeleted({
                        deletedAt: { $ne: null }
                  });
                  console.log(coursesDeleted);

                  let courses = await Course.find();

                  res.render('me/stored-courses', {
                        courses: mutipleMongooseToObject(courses),
                        coursesDeleted
                  });
            } catch (error) {
                  console.log(error);
                  res.status(500).send("Lỗi server");
            }
      }

      // [GET] /me/trash/coures
      async trashCourses(req, res) {
            try {
                  let courses = await Course.findDeleted({
                        deletedAt: { $ne: null }
                  });
                  res.render('me/trash-courses', {
                        courses: mutipleMongooseToObject(courses)
                  });
            } catch (error) {
                  console.log(error);
            }
      }
}

module.exports = new MeController;