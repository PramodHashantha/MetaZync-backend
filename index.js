const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
// const connectDB = require('./config/db');
const serverless = require('serverless-http');

// Load env variables
dotenv.config();

// Connect to MongoDB
// connectDB();

const app = express();

app.use(cors());
app.use(express.json());

// Root route for testing in browser
app.get('/', (req, res) => {
  res.send('🚀 Backend deployed successfully on Vercel!');
});

// API routes
app.use('/api/auth', require('./routes/authRoutes'));
app.use('/api/services', require('./routes/serviceRoutes'));
app.use('/api/bookings', require('./routes/bookingRoutes'));

// Export for Vercel
module.exports = serverless(app);



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