import Trip from "../models/trips.model.js";

export const datastoretrip = async (req, res) => {
  try {
    const trip = await Trip.create({
  title: req.body.title,
  destination: req.body.destination,
  startDate: req.body.startDate,
  endDate: req.body.endDate,
  budget: req.body.budget,
  travelers: req.body.travelers,
  createdBy: req.user._id,
  tripcode: req.body.tripcode,
});

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
}