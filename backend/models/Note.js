const mongoose = require('mongoose');

const NoteSchema = new mongoose.Schema({
  subject: { type: mongoose.Schema.Types.ObjectId, ref: 'Subject' },
  title: String,
  fileUrl: String,
  uploadedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Note', NoteSchema);