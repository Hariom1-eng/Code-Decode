const express = require('express');
const router = express.Router();

router.get('/syllabus', (req, res) => {
  // Example response; in real app, fetch from DB or Google Drive API
  res.json({
    subjects: [
      { id: 1, name: 'Data Structures', semester: 3, branch: 'CSE', syllabusUrl: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf' },
      { id: 2, name: 'Algorithms', semester: 4, branch: 'CSE', syllabusUrl: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf' },
      { id: 3, name: 'Digital Circuits', semester: 3, branch: 'ECE', syllabusUrl: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf' },
      { id: 4, name: 'Thermodynamics', semester: 2, branch: 'ME', syllabusUrl: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf' }
    ]
  });
});

module.exports = router;