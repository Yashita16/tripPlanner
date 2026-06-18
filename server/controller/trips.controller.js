import Trip from "../models/trips.model.js";

export const getTrips = async (req, res) => {
  try {
    const trips = await Trip.find({
      members: req.user._id,
    });

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
      members: req.user._id,
      startDate: { $gt: today },
      status: { $ne: "cancelled" },
    });

    res.json({
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


export const getOngoingTrips = async (req, res) => {
  try {
    const today = new Date();

    const trips = await Trip.find({
      members: req.user._id,
      startDate: { $lte: today },
      endDate: { $gte: today },
      status: { $ne: "cancelled" },
    });

    res.json({
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

export const getPastTrips = async (req, res) => {
  try {
    const today = new Date();

    const trips = await Trip.find({
      members: req.user._id,
      endDate: { $lt: today },
      status: { $ne: "cancelled" },
    });

    res.json({
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

export const getCancelledTrips = async (req, res) => {
  try {
    const trips = await Trip.find({
      members: req.user._id,
      status: "cancelled",
    });

    res.json({
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

export const cancelTrip = async (req, res) => {
  try {
    const trip = await Trip.findByIdAndUpdate(
      req.params.id,
      {
        status: "cancelled",
      },
      { new: true }
    );

    res.json({
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