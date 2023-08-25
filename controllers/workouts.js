const Workout = require('../models/workout');

module.exports = {
    index,
    new: newWorkout
};

async function index(req, res) {
    const workouts = await Workout.find({});
    res.render('workouts/index', { workouts });
}

function newWorkout(req, res) {
    res.render('workouts/new', {errorMsg: ''});
}