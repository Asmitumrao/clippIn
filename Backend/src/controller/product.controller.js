import {Product} from '../models/product.model.js';
import mongoose from 'mongoose';
import uploadImageToCloudinary from '../utils/cloudinary.js';

// api/v1/products  {GET}
const getAllProducts = async (req, res) => {
    try{
        const products = await Product.find({}).select("name price imageUrl _id stockQuantity").lean(); // array of objects
        if( !products || products.length === 0){
            return res.status(404).json({message: "No products found", success: false});
        }
        return res.status(200).json({message: "Products fetched successfully", success: true, products});
    }catch (error) {
        console.log(error);
        return res.status(500).json({message: "Internal server error", success: false, error});
    }
}


// api/v1/products/:id  {GET}
const getProductById = async (req, res) => {
    const {id} = req.params;
    try{
        const product = await Product.findById(id).select("name price imageUrl description category _id stockQuantity").lean();
        if(!product){
            return res.status(404).json({message: "Product not found", success: false});
        }
        return res.status(200).json({message: "Product fetched successfully", success: true, product});
    }catch (error) {
        console.log(error);
        return res.status(500).json({message: "Internal server error", success: false, error});
    }
}

// api/v1/products/category/:category  {GET}
// get all products of a specific category
const getProductsByCategory = async (req, res) => {
    const {category} = req.params;
    try{
        const products = await Product.find({category}).select("name price imageUrl _id stockQuantity").lean();
        if( !products ||  products.length === 0){
            return res.status(404).json({message: "No products found", success: false});
        }
        return res.status(200).json({message: "Products fetched successfully", success: true, products});
    }catch (error) {
        console.log(error);
        return res.status(500).json({message: "Internal server error", success: false, error});
    }
}

// api/v1/product/add-product  {POST}
const addProduct = async (req, res) => {
    const {name, description, price,category, stockQuantity} = req.body;

    const imgFile = req.file?.path; // get image url from multer upload
    // upload image to cloudinary and get url
    const imageUrl = await uploadImageToCloudinary(imgFile); // upload image to cloudinary
    // const imageUrl = imgFile; // for testing purpose, use local image url
    if(!imageUrl){
        return res.status(500).json({message: "Image upload failed", success: false});
    }
    try{
        const product = await Product.create({name, description, price, imageUrl, category, stockQuantity});
        return res.status(201).json({message: "Product added successfully", success: true, product});
    }catch (error) {
        console.log(error);
        return res.status(500).json({message: "Internal server error", success: false, error});
    }
}

// api/v1/products/delete-product/:id  {DELETE}
const deleteProduct = async (req, res) => {
    const { id } = req.params;

    // Validate the ID 
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ message: "Invalid product ID", success: false });
    }
    

    try {
        const product = await Product.findByIdAndDelete(id);

        if (!product) {
            return res.status(404).json({ message: "Product not found", success: false });
        }

        return res.status(200).json({ message: "Product deleted successfully", success: true });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Internal server error", success: false });
    }
};


// api/v1/products/update-product/:id  {PUT}
// update product by id
const updateProduct = async (req, res) => {

    const { id } = req.params;
    console.log(id);
    const { name, description, price, imageUrl, category, stockQuantity } = req.body;

    try {
        const updatedProduct = await Product.findByIdAndUpdate(id,
            {
                name,description,price,imageUrl,category,stockQuantity
            },
            { new: true, runValidators: true } // returns updated doc & runs schema validation
        );

        if (!updatedProduct) {
            return res.status(404).json({
                message: "Product not found",
                success: false
            });
        }

        return res.status(200).json({
            message: "Product updated successfully",
            success: true,
            product: updatedProduct
        });

    } catch (error) {
        console.error(error);
        return res.status(500).json({
            message: "Internal server error",
            success: false,
            error: error.message
        });
    }
};


export {getAllProducts, getProductById, getProductsByCategory, addProduct, deleteProduct, updateProduct};








