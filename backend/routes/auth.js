const express = require('express');
const router = express.Router();
const passport = require('passport');

// Start Google OAuth flow
router.get('/google', passport.authenticate('google', { scope: ['profile', 'email'] }));

// Callback
router.get('/google/callback', passport.authenticate('google', { failureRedirect: '/login' }), (req, res) => {
  // successful auth
  res.redirect('/');
});

router.get('/me', (req, res) => {
  if(!req.user) return res.json({ user: null });
  res.json({ user: { id: req.user._id, name: req.user.name, email: req.user.email, isAdmin: req.user.isAdmin } });
});

router.post('/logout', (req, res) => {
  req.logout(() => {});
  res.json({ ok: true });
});

module.exports = router;