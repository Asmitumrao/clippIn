import {User} from '../models/user.model.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';




// api/v1/user/register
const userRegister = async (req, res) => {
    try{
        console.log(req.body);
        const {name, email, password} = req.body;
        const user = await User.findOne({email});

        if(user){
            res.status(409).json({message: "User already exists", success: false});
        }

        const newUser = new User({name, email, password});
        newUser.password = await bcrypt.hash(password, 10);
        await newUser.save();


        const jwttoken = jwt.sign({email: newUser.email, _id: newUser._id,name:newUser.name},
             process.env.JWT_SECRET,
             {expiresIn: '30d'});
    
        const userData = {
            name: newUser.name,
            email: newUser.email,
            _id: newUser._id,
        };
        res.cookie('token', jwttoken, {
            httpOnly: true,
            secure: true,
            sameSite: 'Strict',
            maxAge: 30*24 * 60 * 60 * 1000 
        });
        res.status(201).json({message: "Signup successfully", success: true, user:userData,})

    }catch(error){
        console.log(error);
        res.status(500).json({message: "Internal server error", success: false, error});
    }
}



// api/v1/user/login

const userLogin = async (req, res) => {

    try{
        const {email, password} = req.body;
        const user = await User.findOne({email});
        if(!user){
            return res.status(403).json({message: "User does not exist", success: false});
        }

        const isPassEqual = await bcrypt.compare(password, user.password);
        if(!isPassEqual){
            return res.status(403).json({message: "Password does not match", success: false});
        }

        const jwttoken = jwt.sign({email: user.email, _id: user._id,name:user.name},
             process.env.JWT_SECRET,
             {expiresIn: '30d'});

        const userData = {
            name: user.name,
            email: user.email,
        };

        res.cookie('token', jwttoken, {
            httpOnly: true,
            secure: true,
            sameSite: 'Strict',
            maxAge: 30*24 * 60 * 60 * 1000 
        });


        res.status(200).json({
            message: "Login successfully",
            success: true,
            user: userData,
        });

    }catch(error){
        console.log(error);
        res.status(500).json({message:"Internal server error", success: false});
    }
}

// api/v1/user/logout
// logout user and clear cookie
const userLogout = async (req, res) => {
    console.log('logout called');
    try{
        res.clearCookie('token', {
            httpOnly: true,
            secure: true,
            sameSite: 'Strict',
        });
        res.status(200).json({message: "Logout successfully", success: true});
    }
    catch(error){
        console.log(error);
        res.status(500).json({message: "Internal server error", success: false, error});
    }
    
}

const viewUserProfile = async(req, res) => {
    try{
        const user = await User.findById(req.user._id).select('-password');
        if(!user){
            return res.status(404).json({message: "User not found", success: false});
        }
        res.status(200).json({message: "User found", success: true, user: user});

    }catch(error){
        console.log(error);
        res.status(500).json({message: "Internal server error", success: false, error});
    }
}


export {userRegister, userLogin, userLogout, viewUserProfile};