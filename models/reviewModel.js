const mongoose = require("mongoose");
const autoIncrement = require('mongoose-auto-increment');

const reviewSchema = new mongoose.Schema({
    userId:{
        type:Number,
        required:true,
    },
    username:{
        type:String,
        required:true,
    },
    productId:{
        type:Number,
        required:true,
    },
    review:{
        type:String,
        required:true,
    }
});

reviewSchema.plugin(autoIncrement.plugin, { model: 'Review', field: 'reviewId', startAt: 1 });
const Review = mongoose.model("Review", reviewSchema);

exports.Review = Review;