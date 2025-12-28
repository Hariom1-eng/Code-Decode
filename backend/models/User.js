const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  googleId: String,
  name: String,
  email: String,
  isAdmin: { type: Boolean, default: false }
});

module.exports = mongoose.model('User', UserSchema);