const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('../config/db');

dotenv.config();
connectDB();

const app = express();
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/auth', require('../routes/authRoutes'));
app.use('/api/services', require('../routes/serviceRoutes'));
app.use('/api/bookings', require('../routes/bookingRoutes'));

// Error handler middleware
app.use((err, req, res, next) => {
  console.error('Unhandled error:', err.stack);
  res.status(500).json({ message: 'Server Error', error: err.message });
});


const serverless = require('serverless-http');
module.exports.handler = serverless(app);
// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
