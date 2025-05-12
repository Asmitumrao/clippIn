import connectDB from "./config/db.js";
import cloudinaryConfig from "./config/cloudinaryConfig.js";
import dotenv from "dotenv";
import {app} from "./app.js";
dotenv.config();




const PORT = process.env.PORT || 3000;

// Connect to MongoDB
cloudinaryConfig(); // Initialize Cloudinary configuration
connectDB()
.then(() =>{
    app.listen(PORT,() => {console.log(`🚀 Server running on port ${PORT}`)});
})

.catch((error) => { 
    console.error('Error connecting to MongoDB:', error.message);
    process.exit(1); // Exit the process with failure   
})










