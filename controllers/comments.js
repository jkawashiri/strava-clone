const Workout = require('../models/workout');

module.exports = {
    create,
    delete: deleteComment
};

async function create(req, res) {
    const workout = await Workout.findById(req.params.id);

    req.body.user = req.user._id;
    req.body.username = req.user.name;
    req.body.userAvatar = req.user.avatar;

    workout.comments.push(req.body);
    try {
        await workout.save();
    } catch (err) {
        console.log(err);
    }
    res.redirect(`/workouts/${workout._id}`);
}

async function deleteComment(req, res) {
    const workout = await Workout.findOne({ 'comments._id': req.params.id, 'comments.user': req.user._id });
    if (!workout) return res.redirect('/workouts');
    workout.comments.remove(req.params.id);
    await workout.save();
    res.redirect(`/workouts/${workout._id}`);
}