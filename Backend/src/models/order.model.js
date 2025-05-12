import mongoose from "mongoose";
const orderSchema = new mongoose.Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: User,
        required: true
    },
    item:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: FoodItem,
        required: true
    }],
    status:{
        type: String,
        enum: ['pending', 'completed', 'cancelled'],
        default: 'pending'
    },
    createdAt:{
        type: Date,
        default: Date.now
    },  
    totalAmmount:{
        type: Number,
        required: true
    },
}, { timestamps: true });

export const Order = mongoose.model('Order', orderSchema);