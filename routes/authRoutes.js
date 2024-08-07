import express from 'express';
import {registerController} from '../controllers/authController.js';
//router obbject
const router  =  express.Router();

//routinng
//register  || method post
router.post('/register',registerController)

export default router