const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commentSchema = new Schema({
    comment: {
        type: String
    },
    date: {
        type: Date
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }, 
    userName: String,
    userAvatar: String
}, {
    timestamps: true
});

const workoutSchema = new Schema({
    title: {
        type: String
    },
    distance: {
        type: Number
    },
    time: {
        type: Number
    },
    pace: {
        type: Number
    },
    comments: {
        type: [commentSchema]
    }
}, {
    timestamps: true
});

module.exports = mongoose.model(Workout, workoutSchema);