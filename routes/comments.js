const express = require('express');
const router = express.Router();
const commentsCtrl = require('../controllers/comments');

// POST /workouts/:id/comments
router.post('/workouts/:id/comments', commentsCtrl.create);
// DELETE /comments:id
router.delete('/comments/:id', commentsCtrl.delete);

module.exports = router;