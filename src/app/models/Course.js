const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');
const mongooseDelete = require('mongoose-delete');
const Schema = mongoose.Schema;

mongoose.plugin(slug);

const Course = new Schema({
      name: { type: String, maxLength: 255 },
      description: { type: String, maxLength: 600 },
      image: { type: String, maxLength: 255 },
      slug: { type: String, slug: 'name', unique: true },
      video: { type: String, maxLength: 255 },
}, {
      timestamps: true,
});

Course.plugin(mongooseDelete, {
      deletedAt: true,
      overrideMethods: 'all',
});

module.exports = mongoose.model('Course', Course);