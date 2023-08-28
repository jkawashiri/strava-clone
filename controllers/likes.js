const Workout = require('../models/workout');

module.exports = {
    create
};

async function create(req, res) {
    const workout = await Workout.findById(req.params.id);

    req.body.user = req.user._id;
    req.body.userName = req.user.name;
    req.body.userAvatar = req.user.avatar;

    if (!workout.likes.includes(req.body)) {
        workout.likes.push(req.body);
    }
    try {
        await workout.save();
    } catch (err) {
        console.log(err);
    }
    res.redirect(`/workouts/${workout._id}`);
}