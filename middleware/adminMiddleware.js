const User = require('../models/User');

const adminOnly = async (req, res, next) => {
  const user = req.user; // from authMiddleware
  try {
    const foundUser = await User.findById(user.id);
    if (foundUser.role !== 'admin') {
      return res.status(403).json({ message: 'Access denied: Admins only' });
    }
    next();
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};

module.exports = adminOnly;
