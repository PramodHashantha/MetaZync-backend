const express = require('express');
const { getBookings, addBooking, updateBooking, deleteBooking } = require('../controllers/bookingController');
const auth = require('../middleware/authMiddleware');
const router = express.Router();

router.use(auth);
router.get('/', getBookings);
router.post('/', addBooking);
router.put('/:id', updateBooking);
router.delete('/:id', deleteBooking);

module.exports = router;
