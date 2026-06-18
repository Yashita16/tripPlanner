import express from "express";

import {
  getTrips,
  createTrip,
  getUpcomingTrips,
  getCancelledTrips,
  getOngoingTrips,
  getPastTrips,
  cancelTrip
} from "../controller/trips.controller.js";

import { protect } from "../middleware/auth.middleware.js";


const router = express.Router();

router.post("/create", createTrip);

router.get("/all", protect, getTrips);

router.get("/upcoming", protect, getUpcomingTrips);

router.get("/ongoing", protect, getOngoingTrips);

router.get("/past", protect, getPastTrips);

router.get("/cancelled", protect , getCancelledTrips);

router.patch("/cancel/:id", protect, cancelTrip);

export default router;