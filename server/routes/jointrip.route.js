import express from "express";
import { jointrip } from "../controller/jointrip.controller.js";
import { protect } from "../middleware/auth.middleware.js";

const router = express.Router();

router.post("/jointrip", protect, jointrip);

export default router;