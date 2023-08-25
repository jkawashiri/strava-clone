const Workout = require('../models/workout');

module.exports = {
    index,
    new: newWorkout,
    create
};

async function index(req, res) {
    const workouts = await Workout.find({});
    res.render('workouts/index', { workouts });
}

function newWorkout(req, res) {
    res.render('workouts/new', {errorMsg: ''});
}

async function create(req, res) {
    try {
        const workout = await Workout.create(req.body);
        res.redirect('/workouts');
    } catch (err) {
        console.log(err);
        res.render('workouts/new', { errorMsg: err.message });
    }
}