const Workout = require('../models/workout');

module.exports = {
    index,
    show,
    new: newWorkout,
    create,
    edit,
    update,
    delete: deleteWorkout
};

async function index(req, res) {
    const userId = req.user._id;
    const workouts = await Workout.find({});
    res.render('workouts/index', { workouts, userId });
}

async function show(req, res) {
    const workout = await Workout.findById(req.params.id);
    const userId = req.user._id;
    const likeIndex = workout.likes.findIndex(like => like.user.equals(userId));
    const likeId = likeIndex !== -1 ? workout.likes[likeIndex]._id : null;
    res.render('workouts/show', { workout, userId, likeId });
}

function newWorkout(req, res) {
    res.render('workouts/new', {errorMsg: ''});
}

async function create(req, res) {
    req.body.user = req.user._id;
    req.body.userName = req.user.name;
    req.body.userAvatar = req.user.avatar;
    
    try {
        await Workout.create(req.body);
        res.redirect('/');
    } catch (err) {
        console.log(err);
        res.render('workouts/new', { errorMsg: err.message });
    }
}

async function edit(req, res) {
    const workout = await Workout.findById(req.params.id);
    function convertToLocalTimezone(date) {
        const timezoneOffset = new Date().getTimezoneOffset() * 60000;
        const localTimezone = new Date(date - timezoneOffset).toISOString();
        return localTimezone.slice(0, 16);
    }
    res.render('workouts/edit', {errorMsg: '', workout, convertToLocalTimezone});
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

async function deleteWorkout(req, res) {
    await Workout.findByIdAndRemove(req.params.id);
    res.redirect('/workouts');
}