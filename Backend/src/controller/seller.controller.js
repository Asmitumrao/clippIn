import {User} from '../models/user.model.js';
import jwt from 'jsonwebtoken';




// api/v1/seller/login

const sellerLogin = async (req, res) => {

    const {email, password} = req.body;
    try {
        if(email===process.env.SELLER_EMAIL && password ===process.env.SELLER_PASSWORD){

            const sellerInfo ={
                email: process.env.SELLER_EMAIL,
                role :'seller',
                name: 'Cafe'
            };
            const sellerToken = jwt.sign( sellerInfo,process.env.JWT_SECRET, {expiresIn: '5d'});
            res.cookie('sellerToken', sellerToken, {
                httpOnly: true,
                secure: true,
                sameSite: 'Strict',
                maxAge: 5 * 24 * 60 * 60 * 1000, // 5 days
            });
            console.log("Seller login successfully");
            return res.status(200).json({message: "Seller login successfully", success: true});
        }
        else{
            console.log("Invalid email or password");
            return res.status(400).json({message: "Invalid email or password", success: false});
        }
    }
    catch (error) {
        console.log(error);
        res.status(500).json({message: "Internal server error", success: false, error});
    }
}


// api/v1/seller/logout
const sellerLogout = async (req, res) => {
    try {
        res.clearCookie('sellerToken',{
            httpOnly: true,
            secure: true,
            sameSite: 'Strict',
        });
        res.status(200).json({message: "Logout successfully", success: true});
    } catch (error) {
        console.log(error);
        res.status(500).json({message: "Internal server error", success: false, error});
    }
}


export {sellerLogin, sellerLogout};