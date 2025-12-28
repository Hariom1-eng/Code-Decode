const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const User = require('../models/User');

module.exports = function(passportInstance){
  passportInstance.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: process.env.GOOGLE_CALLBACK_URL || '/api/auth/google/callback'
  }, async (accessToken, refreshToken, profile, done) => {
    try{
      const existing = await User.findOne({ googleId: profile.id });
      if(existing) return done(null, existing);
      const user = await User.create({ googleId: profile.id, name: profile.displayName, email: profile.emails && profile.emails[0] && profile.emails[0].value });
      return done(null, user);
    }catch(err){
      return done(err, null);
    }
  }));

  passportInstance.serializeUser((user, done) => done(null, user.id));
  passportInstance.deserializeUser(async (id, done) => {
    try{
      const u = await User.findById(id);
      done(null, u);
    }catch(err){ done(err, null); }
  });
}