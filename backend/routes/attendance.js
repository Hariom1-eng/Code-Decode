const express = require('express');
const router = express.Router();
const QRCode = require('qrcode');
const Attendance = require('../models/Attendance');

// Generate a QR token (admin only)
router.post('/generate-qr', async (req, res) => {
  if(!req.user || !req.user.isAdmin) return res.status(403).json({ error: 'admin required' });
  const token = Math.random().toString(36).slice(2, 10);
  const data = `attendance:${token}`;
  const dataUrl = await QRCode.toDataURL(data);
  res.json({ token, dataUrl });
});

// Scan / submit token
router.post('/qr-scan', async (req, res) => {
  const { token, studentId } = req.body;
  if(!token || !studentId) return res.status(400).json({ error: 'token and studentId required' });

  // In production, validate token expiry/valid list. Here we record attendance directly.
  await Attendance.create({ studentId, token });
  res.json({ ok: true, message: 'Attendance recorded' });
});

router.post('/manual', (req, res) => {
  res.json({ ok: true, message: 'Manual attendance recorded (placeholder)' });
});

module.exports = router;