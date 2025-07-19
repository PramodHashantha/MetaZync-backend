const Service = require('../models/Service');

// Get all services
exports.getServices = async (req, res) => {
  try {
    const services = await Service.find();
    res.json(services);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Create new service
exports.createService = async (req, res) => {
  try {
    const newService = new Service({ name: req.body.name });
    await newService.save();
    res.status(201).json(newService);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Update service
exports.updateService = async (req, res) => {
  try {
    const updatedService = await Service.findByIdAndUpdate(
      req.params.id,
      { name: req.body.name },
      { new: true }
    );
    res.json(updatedService);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete service
exports.deleteService = async (req, res) => {
  try {
    await Service.findByIdAndDelete(req.params.id);
    res.json({ message: 'Service deleted successfully' });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};