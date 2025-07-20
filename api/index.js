const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
// const connectDB = require('../config/db');
const serverless = require('serverless-http');

// Load env variables
dotenv.config();

// Connect to MongoDB
// connectDB();

const app = express();

app.use(cors());
app.use(express.json());

// Test route
app.get('/', (req, res) => {
  res.send('API is running...');
});

app.get('/api/ping', (req, res) => {
  res.json({ pong: true });
});

// API routes
// app.use('/api/auth', require('../routes/authRoutes'));
// app.use('/api/services', require('../routes/serviceRoutes'));
// app.use('/api/bookings', require('../routes/bookingRoutes'));

// Export properly for Vercel
module.exports = serverless(app);
