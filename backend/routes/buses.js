const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.json({
    buses: [
      { id: 1, name: 'Bus A', route: 'Gate - College - Mall', time: '08:00, 09:00' },
      { id: 2, name: 'Bus B', route: 'Station - College', time: '07:30, 08:30' }
    ]
  });
});

module.exports = router;