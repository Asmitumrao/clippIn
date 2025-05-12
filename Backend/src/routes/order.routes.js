import {Router} from 'express'; 

const router = Router();




import {userValidate} from '../middleware/validate.js';
import {getCart, updateCart,clearCart} from '../controller/cart.controller.js';



router.use(userValidate);  // validate user token for all routes in this file
router.post('/update', updateCart); // api/v1/cart/update  {POST}
router.get('/get-cart', getCart); // api/v1/cart/get-cart  {GET}
router.delete('/clear-cart', clearCart); // api/v1/cart/clear-cart  {DELETE}






















export default router;