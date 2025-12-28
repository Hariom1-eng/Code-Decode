const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.json({
    buses: [
      { id: 1, name: 'Bus A', route: 'Gate - College - Mall', times: ['08:00','09:00','12:00'], stops: [{ name: 'Gate', lat:23.2587, lng:77.4120 }, { name: 'College', lat:23.2599, lng:77.4126 }, { name: 'Mall', lat:23.2610, lng:77.4130 }] },
      { id: 2, name: 'Bus B', route: 'Station - College', times: ['07:30','08:30','17:00'], stops: [{ name: 'Station', lat:23.2578, lng:77.4115 }, { name: 'College', lat:23.2599, lng:77.4126 }] }
    ]
  });
});

module.exports = router;