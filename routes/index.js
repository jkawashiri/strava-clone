const express = require('express');
const router = express.Router();

const passport = require('passport');

const Workout = require('../models/workout');

/* GET home page. */
router.get('/', async function(req, res, next) {
  const workouts = await Workout.find({});
  res.render('index', { workouts });
});
// Google OAuth login route
router.get('/auth/google', passport.authenticate(
  'google',
  {
    scope: ['profile', 'email'],
    prompt: "select_account"
  }
));
// Google OAuth callback route
router.get('/oauth2callback', passport.authenticate(
  'google',
  {
    successRedirect: '/',
    failureRedirect: '/'
  }
));
// OAuth logout route
router.get('/logout', function(req, res){
  req.logout(function() {
    res.redirect('/');
  });
});

module.exports = router;
