const Workout = require('../models/workout');

module.exports = {
    index,
    show,
    new: newWorkout,
    create,
    edit,
    update
};

async function index(req, res) {
    const workouts = await Workout.find({});
    res.render('workouts/index', { workouts });
}

async function show(req, res) {
    const workout = await Workout.findById(req.params.id);
    res.render('workouts/show', { workout });
}

function newWorkout(req, res) {
    res.render('workouts/new', {errorMsg: ''});
}

async function create(req, res) {
    try {
        await Workout.create(req.body);
        res.redirect('/workouts');
    } catch (err) {
        console.log(err);
        res.render('workouts/new', { errorMsg: err.message });
    }
}

async function edit(req, res) {
    const workout = await Workout.findById(req.params.id);
    res.render('workouts/edit', {errorMsg: '', workout});
}

async function update(req, res) {
    const workout = req.params.id;
    const newWorkoutData = req.body;
    try {
        const newWorkout = await Workout.findByIdAndUpdate(workout, newWorkoutData, { new: true });
        res.redirect(`/workouts/${newWorkout._id}`);
    } catch (err) {
        console.log(err);
        res.render('workouts/edit', { errorMsg: err.message });
    }
}