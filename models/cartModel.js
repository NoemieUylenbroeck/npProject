const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true,
    },
    userId:{
        type:Number,
        required:true,
    },
    orderedproduct:{
        type:String,
        required:true,
    },
    numberproduct:{
        type:Number,
        min:1,
        required:true,
    },
    totalprice:{
        type:Number,
        required:true,
    }
});

const Cart = mongoose.model("Cart", cartSchema);

exports.Cart = Cart;