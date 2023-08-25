var express = require('express');
var router = express.Router();

var workoutsCtrl = require('../controllers/workouts');

// GET /workouts
router.get('/', workoutsCtrl.index);
// GET /workouts/new
router.get('/new', workoutsCtrl.new);

module.exports = router;