import Trip from "../models/trips.model.js";

export const datastore = async (req, res) => {
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
}