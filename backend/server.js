require('dotenv').config();
const express = require('express');
const cors = require('cors');
const session = require('express-session');
const passport = require('passport');
const connectDB = require('./db');
require('./config/passport')(passport);
const app = express();
const port = process.env.PORT || 5000;

app.use(cors({ origin: true, credentials: true }));
app.use(express.json());

// Sessions & passport
app.use(session({ secret: process.env.SESSION_SECRET || 'dev-secret', resave: false, saveUninitialized: false }));
app.use(passport.initialize());
app.use(passport.session());

// Routes
app.use('/api/map', require('./routes/map'));
app.use('/api/academics', require('./routes/academics'));
app.use('/api/ai', require('./routes/ai'));
app.use('/api/news', require('./routes/news'));
app.use('/api/buses', require('./routes/buses'));
app.use('/api/attendance', require('./routes/attendance'));
app.use('/api/auth', require('./routes/auth'));

app.get('/', (req, res) => res.send({ message: 'Smart Campus Backend is running' }));

// connect to DB
connectDB();

app.listen(port, () => console.log(`Server running on port ${port}`));