const mongoose = require("mongoose");

const currentOrderSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true,
    },
    userId:{
        type:Number,
        required:true,
    },
    orderedproducts:{
        type:,
        required:true,
    }
});

const CurrentOrder = mongoose.model("CurrentOrder", currentOrderSchema);

exports.CurrentOrder = CurrentOrder;