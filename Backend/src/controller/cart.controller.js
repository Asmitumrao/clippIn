import {User} from '../models/user.model.js';
import {Product} from '../models/product.model.js';



// api/v1/cart/update  {POST}
const updateCart = async (req, res) => {
    const userId = req.user._id; // get user id from token
    const {productId, quantity} = req.body; // get product id and quantity from request body

    try {
        // check if product exists in the database
        const productExists = await Product.exists({ _id: productId });
        if (!productExists) {
          return res.status(404).json({ message: "Product not found", success: false });
        }

        // check if product is already in the cart
        const user = await User.findById(userId).select('cart');
        const productIndex = user.cart.findIndex(item => item.product.toString() === productId);

        if (productIndex!== -1) {
            // if product exists in cart, update the quantity
            user.cart[productIndex].quantity += quantity;
            // if quantity is 0, remove the product from the cart
            if (user.cart[productIndex].quantity <= 0) {
                user.cart.splice(productIndex, 1);
            }

        } else {
            // if product does not exist in cart, add it to the cart
            if (quantity >0)  // add only if quanity is greater than 0
                user.cart.push({product:productId, quantity});
        }
        await user.save();
        // save the updated user document
        await user.populate('cart.product');

        // return the  updated total price of the cart and quantity of the product
        const totalPrice = user.cart.reduce((total, item) => total + (item.product.price * item.quantity), 0);
        const totalQuantity = user.cart.reduce((total, item) => total + item.quantity, 0);
        return res.status(200).json({message: "Product added to cart", success: true, cart: user.cart, totalPrice, totalQuantity});


    } catch (error) {
        console.log(error);
        return res.status(500).json({message: "Internal server error", success: false, error});
    }
}



// api/v1/cart/get-cart  {GET}
const getCart = async (req, res) => {
    // get user id from token
    const userId = req.user._id;
    try {
        // fetch cart from user model
        const user = await User.findById(userId).populate('cart.product');
        if (!user) {
            return res.status(404).json({message: "User not found", success: false});
        }
        // calculate total price and total quantity
        const totalPrice = user.cart.reduce((total, item) => total + (item.product.price * item.quantity), 0);
        const totalQuantity = user.cart.reduce((total, item) => total + item.quantity, 0);
        return res.status(200).json({message: "Cart fetched successfully", success: true, cart: user.cart, totalPrice, totalQuantity});
    } catch (error) {
        console.log(error);
        return res.status(500).json({message: "Internal server error", success: false, error});
    }
}



// api/v1/cart/clear-cart  {DELETE}
const clearCart = async (req, res) => {
    // get user id from token
    const user_id = req.user._id;

    try{
        // fetch cart from user model
        const user = await User.findById(user_id).select('cart');
        if (!user) {
            return res.status(404).json({message: "User not found", success: false});
        }
        // clear cart
        user.cart = [];
        await user.save();
        return res.status(200).json({message: "Cart cleared successfully", success: true});
    }catch (error) {
        console.log(error);
        return res.status(500).json({message: "Internal server error", success: false, error});
    }

}

export {updateCart, getCart, clearCart};





