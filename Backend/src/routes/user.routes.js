import {Router}  from 'express';
import {userRegister, userLogin, userLogout, viewUserProfile} from '../controller/user.controller.js';
import { loginValidation, signUpValidation } from '../middleware/authValidation.js';
import { userValidate } from '../middleware/validate.js';

const router= Router();

router.post('/register',signUpValidation, userRegister);
router.post('/login',loginValidation, userLogin);
router.post('/logout', userLogout);
router.post('/profile',userValidate, viewUserProfile);



export default router;