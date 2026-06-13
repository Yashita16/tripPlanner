import express from 'express'
import { datastore
 } from '../controller/trips.controller'


const router = express.Router();


router.get('/createtrip' , datastore);
