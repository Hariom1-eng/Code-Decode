const express = require('express');
const router = express.Router();

router.get('/syllabus', (req, res) => {
  // Example response; in real app, fetch from DB or Google Drive API
  res.json({
    subjects: [
      { id: 1, name: 'Data Structures', semester: 3, branch: 'CSE' },
      { id: 2, name: 'Algorithms', semester: 4, branch: 'CSE' }
    ]
  });
});

module.exports = router;