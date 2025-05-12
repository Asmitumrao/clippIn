import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true
    },
    cart: [
        {
          product: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Product", // assumes you have a Product model
            required: true
          },
          quantity: {
            type: Number,
            default: 1
          }
        }
      ]
});


export const  User = mongoose.model('User', userSchema);    