const Course = require('../models/Course');
const { mutipleMongooseToObject } = require('../../util/mongoose');

class SiteController {
      // [GET] /home
      async home(req, res) {
            try {
                  let courses = await Course.find({});
                  res.render('home', {
                        courses: mutipleMongooseToObject(courses)
                  });
            } catch (error) {
                  console.log("Lỗi ", error);
                  res.status(400).json({ error: 'ERROR!!!' });
            }
      }

      // [GET] /search
      search(req, res) {
            res.render('search');
      }
}

module.exports = new SiteController;