const express = require('express');
const router = express.Router();

// GET: sample campus points
router.get('/', (req, res) => {
  res.json({
    markers: [
      { id: 'CS-LAB', name: 'Computer Science Lab', lat: 23.2599, lng: 77.4126 },
      { id: 'LIB', name: 'Library', lat: 23.2605, lng: 77.4128 }
    ]
  });
});

module.exports = router;