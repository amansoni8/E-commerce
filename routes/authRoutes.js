import express from 'express';
import {registerController, loginController} from '../controllers/authController.js';
//router obbject
const router  =  express.Router();

//routinng
//register  || method post
router.post('/register',registerController)
router.post('/login',loginController)
export default router