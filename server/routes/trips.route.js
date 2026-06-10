import express from "express";

import {
  getTrips,
  createTrip,
  getUpcomingTrips
} from "../controller/trips.controller.js";

const router = express.Router();

router.get("/get", getTrips);
router.post("/create", createTrip);
router.get("/upcoming", getUpcomingTrips);

export default router;