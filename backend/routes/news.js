const express = require('express');
const router = express.Router();

// Returns latest filtered news (placeholder)
router.get('/', (req, res) => {
  res.json({
    news: [
      { id: 1, title: 'Google releases new Gemini feature', link: '#' }
    ]
  });
});

module.exports = router;