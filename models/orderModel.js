const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema({
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
    price:{
        type:Number,
        required:true,
    }
});

const Order = mongoose.model("Order", OrderSchema);

exports.Order = Order;