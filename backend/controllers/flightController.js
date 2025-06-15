const Flight = require('../models/FlightCard');

// Create a flight (POST)
exports.createFlight = async (req, res, next) => {
  try {
    const newFlight = new Flight(req.body);
    const savedFlight = await newFlight.save();
    res.status(201).json(savedFlight);
  } catch (err) {
    next(err);
  }
};

// Get all flights (GET)
exports.getAllFlights = async (req, res, next) => {
  try {
    const flights = await Flight.find();
    res.status(200).json(flights);
  } catch (err) {
    next(err);
  }
};

// Get departing flights (GET)
exports.getDepartingFlights = async (req, res, next) => {
  try {
    const flights = await Flight.find({ type: 'departing' });
    res.status(200).json(flights);
  } catch (err) {
    next(err);
  }
};

// Get return flights (GET)
exports.getReturnFlights = async (req, res, next) => {
  try {
    const flights = await Flight.find({ type: 'return' });
    res.status(200).json(flights);
  } catch (err) {
    next(err);
  }
};

// Get flight by ID (GET)
exports.getFlightById = async (req, res, next) => {
  try {
    const flight = await Flight.findById(req.params.id);
    if (!flight) return res.status(404).json({ message: "Flight not found" });
    res.status(200).json(flight);
  } catch (err) {
    next(err);
  }
};

// Update a flight (PUT)
exports.updateFlight = async (req, res, next) => {
  try {
    const updatedFlight = await Flight.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.status(200).json(updatedFlight);
  } catch (err) {
    next(err);
  }
};

// Delete a flight (DELETE)
exports.deleteFlight = async (req, res, next) => {
  try {
    await Flight.findByIdAndDelete(req.params.id);
    res.status(204).end();
  } catch (err) {
    next(err);
  }
};
