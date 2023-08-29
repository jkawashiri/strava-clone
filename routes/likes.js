const express = require('express');
const router = express.Router();

const likesCtrl = require('../controllers/likes');

const ensureLoggedIn = require('../config/ensureLoggedIn');

// POST /workouts/:id/likes
router.post('/workouts/:id/likes', ensureLoggedIn, likesCtrl.create);
// DELETE /likes/:id
router.delete('/likes/:id', ensureLoggedIn, likesCtrl.delete);

module.exports = router;