const express = require('express');
const router = express.Router();

// GET: sample campus points
router.get('/', (req, res) => {
  res.json({
    markers: [
      { id: 'CS-LAB', name: 'Computer Science Lab', lat: 23.2599, lng: 77.4126, category: 'Academic', description: 'CS department labs and classrooms' },
      { id: 'LIB', name: 'Library', lat: 23.2605, lng: 77.4128, category: 'Facility', description: 'Main campus library with journals and study spaces' },
      { id: 'HOSTEL', name: 'Student Hostel', lat: 23.2588, lng: 77.4132, category: 'Residential', description: 'On-campus accommodations for students' },
      { id: 'CANTEEN', name: 'Cafeteria', lat: 23.2594, lng: 77.4122, category: 'Facility', description: 'Cafeteria and food kiosks' }
    ]
  });
});

module.exports = router;