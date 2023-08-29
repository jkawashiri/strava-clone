const Workout = require('../models/workout');

module.exports = {
    create: like,
    delete: unlike
};

async function like(req, res) {
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

async function unlike(req, res) {
    const workout = await Workout.findOne({ 'likes._id': req.params.id, 'likes.user': req.user._id });
    if (!workout) return res.redirect('/workouts');
    workout.likes.remove(req.params.id);
    await workout.save();
    res.redirect(`/workouts/${workout._id}`);
}