const mongoose = require('mongoose');
const connectDB = require('./db');
const Subject = require('./models/Subject');
const Note = require('./models/Note');
const User = require('./models/User');
const Attendance = require('./models/Attendance');

async function seed(){
  await connectDB();

  await Subject.deleteMany({});
  await Note.deleteMany({});

  const s1 = await Subject.create({ name: 'Data Structures', semester: 3, branch: 'CSE' });
  const s2 = await Subject.create({ name: 'Algorithms', semester: 4, branch: 'CSE' });

  await Note.create({ subject: s1._id, title: 'DS Notes', fileUrl: 'https://drive.google.com/file/ds-notes' });
  await Note.create({ subject: s2._id, title: 'Algo Notes', fileUrl: 'https://drive.google.com/file/algo-notes' });

  // create admin user
  await User.deleteMany({});
  const admin = await User.create({ name: 'Admin User', email: 'admin@example.com', isAdmin: true, googleId: 'admin-google-id' });

  // clear attendance
  await Attendance.deleteMany({});

  console.log('Seed data created (subjects, notes, admin)');
  process.exit(0);
}

seed().catch(err => { console.error(err); process.exit(1); });