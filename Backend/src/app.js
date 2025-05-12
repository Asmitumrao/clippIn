import express from 'express';
import cookieParser from 'cookie-parser';
console.log('app.jsx file loaded');



const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(cookieParser());



import userRoutes from "./routes/user.routes.js";
import sellerRoutes from "./routes/seller.routes.js";
import productRoutes from "./routes/product.routes.js";
import cartRoutes from "./routes/order.routes.js";





app.use("/api/v1/user", userRoutes);
app.use('/api/v1/seller',sellerRoutes);
app.use('/api/v1/product', productRoutes);
app.use('/api/v1/cart', cartRoutes);

// app.use("api/v1/food", foodRoutes);
// app.use("api/v1/order", orderRoutes);


export {app};