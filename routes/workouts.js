const express = require('express');
const router = express.Router();

const workoutsCtrl = require('../controllers/workouts');

const ensureLoggedIn = require('../config/ensureLoggedIn');

// GET /workouts
router.get('/', workoutsCtrl.index);
// GET /workouts/new
router.get('/new', ensureLoggedIn, workoutsCtrl.new);
// GET /workouts/:id
router.get('/:id', workoutsCtrl.show);
// GET /workouts/:id/edit
router.get('/:id/edit', ensureLoggedIn, workoutsCtrl.edit);
// POST /workouts
router.post('/', ensureLoggedIn, workoutsCtrl.create);
// PUT /workouts/:id
router.put('/:id', ensureLoggedIn, workoutsCtrl.update);
// DELETE /workouts/:id
router.delete('/:id', ensureLoggedIn, workoutsCtrl.delete);

module.exports = router;