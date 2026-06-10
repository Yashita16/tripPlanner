import Trip from "../models/trips.model.js";

export const getTrips = async (req, res) => {
  try {
    const trips = await Trip.find();

    res.status(200).json({
      success: true,
      trips,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const createTrip = async (req, res) => {
  try {
    const trip = await Trip.create(req.body);

    res.status(201).json({
      success: true,
      trip,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};


export const getUpcomingTrips = async (req, res) => {
  try {
    const today = new Date();

    const trips = await Trip.find({
      startDate: { $gte: today },
    }).sort({ startDate: 1 });

    res.status(200).json({
      success: true,
      trips,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};