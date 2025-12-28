const express = require('express');
const router = express.Router();

// Placeholder for AI endpoints (Gemini integration etc.)
router.post('/generate-image', (req, res) => {
  // Expect: { prompt: '...' }
  // TODO: integrate Google Gemini API
  res.json({ ok: true, message: 'Image generation endpoint (placeholder)' });
});

router.post('/create-ppt', (req, res) => {
  res.json({ ok: true, message: 'PPT creation endpoint (placeholder)' });
});

module.exports = router;