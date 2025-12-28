const mongoose = require('mongoose');

const SubjectSchema = new mongoose.Schema({
  name: String,
  semester: Number,
  branch: String
});

module.exports = mongoose.model('Subject', SubjectSchema);