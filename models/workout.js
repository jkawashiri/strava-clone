const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const likeSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    userName: String,
    userAvatar: String
}, {
    timestamps: true
});

const commentSchema = new Schema({
    comment: {
        type: String
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
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
        type: String,
        required: true
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
    comments: {
        type: [commentSchema]
    },
    likes: {
        type: [likeSchema]
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }, 
    userName: String,
    userAvatar: String
}, {
    timestamps: true
});

module.exports = mongoose.model('Workout', workoutSchema);

