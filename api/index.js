const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const serverless = require('serverless-http');
const connectDB = require('./config/db');

// Load env vars
dotenv.config();

// Connect to DB
connectDB();

const app = express();

// CORS setup
const corsOptions = {
  origin: ["https://frontend-or7r.vercel.app"],
  credentials: true,
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
};
app.use(cors(corsOptions));
app.use(express.json());

// Root Test Route
app.get('/', (req, res) => {
  res.send('✅ Backend deployed successfully on Vercel');
});

// API Routes
app.use('/api/auth', require('./routes/authRoutes'));
app.use('/api/services', require('./routes/serviceRoutes'));
app.use('/api/bookings', require('./routes/bookingRoutes'));

// Export for Vercel
module.exports = app;
module.exports.handler = serverless(app);


// Export for Vercel
// module.exports = serverless(app);



// const express = require('express');
// const dotenv = require('dotenv');
// const cors = require('cors');
// const connectDB = require('./config/db');
// const serverless = require('serverless-http');


// dotenv.config();


// connectDB();

// const app = express();

// app.use(cors());
// app.use(express.json());


// app.use('/api/auth', require('./routes/authRoutes'));
// app.use('/api/services', require('./routes/serviceRoutes'));
// app.use('/api/bookings', require('./routes/bookingRoutes'));


// module.exports = serverless(app);