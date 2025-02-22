var express = require('express');
var router = express.Router();

const courseController = require('../app/controllers/CourseController');

router.delete('/:id/delete', courseController.destroy);
router.delete('/:id/force', courseController.forceDestroy);
router.patch('/:id/restore', courseController.restore);
router.get('/:id/edit', courseController.edit);
router.post('/handle-form-actions', courseController.handleFormActions);
router.put('/:id', courseController.update);
router.get('/create', courseController.create);
router.post('/store', courseController.store);
router.get('/:slug', courseController.show);


module.exports = router;