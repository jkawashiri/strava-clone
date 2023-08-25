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
    activity: {
        type: String,
        enum: ['Run'],
        default: 'Run'
    },
    date: {
        type: Date
    },
    title: {
        type: String
    },
    distance: {
        type: Number
    },
    hours: {
        type: Number,
        min: 0,
        default: 0
    },
    minutes: {
        type: Number,
        min: 0,
        max: 59,
        default: 0
    },
    seconds: {
        type: Number,
        min: 0,
        max: 59,
        default: 0
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

module.exports = mongoose.model('Workout', workoutSchema);

// function pace() {
//     let hourscon = hours * 60 * 60;
//     let minutescon = minutes * 60;
//     let time = hourscon + minutescon + seconds;
//     return time / distance;
// }