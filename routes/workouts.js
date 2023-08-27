var express = require('express');
var router = express.Router();

var workoutsCtrl = require('../controllers/workouts');

// GET /workouts
router.get('/', workoutsCtrl.index);
// GET /workouts/new
router.get('/new', workoutsCtrl.new);
// GET /workouts/:id
router.get('/:id', workoutsCtrl.show);
// GET /workouts/:id/edit
router.get('/:id/edit', workoutsCtrl.edit);
// POST /workouts
router.post('/', workoutsCtrl.create);
// PUT /workouts/:id
router.put('/:id', workoutsCtrl.update);
// DELETE /workouts/:id
router.delete('/:id', workoutsCtrl.delete);

module.exports = router;