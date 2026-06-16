import express from 'express'
import {datastoretrip} from '../controller/createtrip.controller.js'
import { protect } from "../middleware/auth.middleware.js";



const router = express.Router();


router.post("/createtrip", protect, datastoretrip);


export default router;
