import {Router} from 'express';
// import {addFood, deleteFood, editFood, getAllFood, getSingleFood} from '../controller/food.controller.js';

const router = Router();
import {getAllProducts, getProductById, getProductsByCategory, addProduct,deleteProduct,updateProduct} from '../controller/product.controller.js';
import { sellerValidate } from '../middleware/validate.js';
import { singleFileUpload } from '../middleware/multerUpload.js';



// anyone can access these routes
router.get('/',getAllProducts); // get all products
router.get('/:id', getProductById); // get product by id
router.get('/category/:category',getProductsByCategory); // get products by category


//only seller can access these routes
router.post('/add-product', sellerValidate, singleFileUpload, addProduct); // add product
router.delete('/:id', sellerValidate, deleteProduct); // delete product
router.put('/:id', sellerValidate, updateProduct); // edit product
 




export default router;