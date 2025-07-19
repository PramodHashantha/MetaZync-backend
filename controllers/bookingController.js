const Booking = require('../models/Booking');
const User = require('../models/User');

exports.getBookings = async (req, res) => {
  const bookings = await Booking.find({ user_id: req.user.id }).populate('service_id');
  res.json(bookings);
};

exports.addBooking = async (req, res) => {
  const { customer_name, address, date_time, service_id } = req.body;
  const newBooking = new Booking({ customer_name, address, date_time, service_id, user_id: req.user.id });
  await newBooking.save();
  res.status(201).json(newBooking);
};

exports.updateBooking = async (req, res) => {
  const updated = await Booking.findOneAndUpdate(
    { _id: req.params.id, user_id: req.user.id },
    req.body,
    { new: true }
  );
  res.json(updated);
};

exports.deleteBooking = async (req, res) => {
  await Booking.findOneAndDelete({ _id: req.params.id, user_id: req.user.id });
  res.json({ message: 'Booking deleted' });
};

exports.getBookings = async (req, res) => {
  const userId = req.user.id;

  try {
    const user = await User.findById(userId);
    const filter = user.role === 'admin' ? {} : { user_id: userId };
    const bookings = await Booking.find(filter).populate('service_id').populate('user_id', 'username');
    res.json(bookings);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
