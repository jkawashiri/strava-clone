var express = require('express');
var router = express.Router();

var workoutsCtrl = require('../controllers/workouts');
const workouts = require('../controllers/workouts');

// GET /workouts
router.get('/', workoutsCtrl.index);
// GET /workouts/new
router.get('/new', workoutsCtrl.new);
// GET /workouts/:id
router.get('/:id', workoutsCtrl.show);
// POST /workouts
router.post('/', workoutsCtrl.create);

module.exports = router;