const mongoose = require("mongoose");
const autoIncrement = require('mongoose-auto-increment');

const productSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        required:true,
    },
    price:{
        type:Number,
        required:true,
    }
});

productSchema.plugin(autoIncrement.plugin, { model: 'Product', field: 'productId', startAt: 1 });
const Product = mongoose.model("Product", productSchema);

exports.Product = Product;