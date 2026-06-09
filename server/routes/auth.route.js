import express from 'express';
import signupController from '../controller/signup.controller.js';
import  loginController  from '../controller/login.controller.js';

const router = express.Router();

router.post('/register', signupController);
router.post('/login', loginController);


export default router;