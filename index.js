// import express from 'express';
// import dotenv from 'dotenv';
// import cors from 'cors';
// import { connectDB } from './config/db.js';
// import authRoutes from './routes/authRoutes.js';
// import serviceRoutes from './routes/serviceRoutes.js';
// import bookingRoutes from './routes/bookingRoutes.js';

// dotenv.config();
// connectDB();

// const app = express();


// const corsOptions = {
//   origin: [
//     "https://frontend-or7r.vercel.app",
//     "http://localhost:3000" // For local development
//   ],
//   credentials: true,
//   methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
//   allowedHeaders: ["Content-Type", "Authorization"],
//   optionsSuccessStatus: 204
// };

// app.use(cors(corsOptions));
// app.use(express.json());

// app.get('/api', (req, res) => res.send('✅ Backend is running'));
// app.use('/api/auth', authRoutes);
// app.use('/api/services', serviceRoutes);
// app.use('/api/bookings', bookingRoutes);


// app.use((err, req, res, next) => {
//   console.error(err.stack);
//   res.status(500).json({ error: 'Internal Server Error' });
// });

// export default app;


// Export for Vercel
// module.exports = serverless(app);



const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');

dotenv.config();
connectDB();

const app = express();

app.use(cors());
app.use(express.json());

// API routes
app.use('/api/auth', require('./routes/authRoutes'));
app.use('/api/services', require('./routes/serviceRoutes'));
app.use('/api/bookings', require('./routes/bookingRoutes'));

// Health check
app.get('/', (req, res) => {
  res.send('🚀 API is running on Vercel');
});

// ✅ Export as default for Vercel
module.exports = app;

