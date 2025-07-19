const express = require('express');
const { register, login } = require('../controllers/authController');
const router = express.Router();
const auth = require('../middleware/authMiddleware');
const User = require('../models/User');

router.post('/register', register);
router.post('/login', login);
router.get('/me', auth, async (req, res) => {
  const user = await User.findById(req.user.id);
  res.json({ id: user._id, username: user.username, role: user.role });
});


module.exports = router;
