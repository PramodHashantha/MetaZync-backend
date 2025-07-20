const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');
const serverless = require('serverless-http');

// Load env variables
dotenv.config();

// Connect to MongoDB
connectDB();

const app = express();

const corsOptions = {
  origin: ["https://frontend-or7r.vercel.app"],
  credentials: true,
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
};

app.use(cors(corsOptions));
app.use(express.json());

// Root route for testing in browser
app.get('/', (req, res) => {
  res.send('🚀 Backend deployed successfully on Vercel!');
});

// API routes
app.use('/api/auth', require('./routes/authRoutes'));
app.use('/api/services', require('./routes/serviceRoutes'));
app.use('/api/bookings', require('./routes/bookingRoutes'));

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

export default app;

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