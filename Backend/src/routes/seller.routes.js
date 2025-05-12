import {Router } from 'express';
const router = Router();






import {sellerLogin, sellerLogout} from '../controller/seller.controller.js';
import { loginValidation } from '../middleware/authValidation.js';
import { sellerValidate } from '../middleware/validate.js';


router.post('/login', loginValidation, sellerLogin);
router.post('/logout',  sellerLogout);


















export default router;