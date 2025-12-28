const mongoose = require('mongoose');

const AttendanceSchema = new mongoose.Schema({
  studentId: String,
  token: String,
  timestamp: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Attendance', AttendanceSchema);