const Service = require('../models/Service');

exports.getServices = async (req, res) => {
  const services = await Service.find();
  res.json(services);
};

exports.createService = async (req, res) => {
  const newService = new Service({ name: req.body.name });
  await newService.save();
  res.status(201).json(newService);
};
