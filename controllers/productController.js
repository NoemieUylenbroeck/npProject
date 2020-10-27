let productsModel = require("../models/productsModel");
let Product = productsModel.Product;
let reviewModel = require("../models/reviewModel");
let Review = reviewModel.Review;
let userModel = require("../models/userModel");
let User = userModel.User;

module.exports={
    //Function to display shop.ejs
    display: async function(req, res) {
        let productName = req.params.name;
        let username = req.session.username;
        let product = await Product.findOne({name:productName}).exec();
        let productIdReview = product.productId;
        let review = await Review.find({productId:productIdReview}).exec();
        res.render('../views/product', {username: username, product: product, review:review});
    },

    addreview:async function(req, res){
        let productName = req.params.name;
        let username = req.session.username;
        if(!username){
            res.redirect('../signin')
        } else{
            let reviewProductId= (await Product.findOne({name:productName},{'_id':0, 'productId':1},).exec()).productId;
            let reviewUserId= (await User.findOne({username:username},{'_id':0, 'userId':1},).exec()).userId;
            // Insert the new review
            review = new Review({
                userId:reviewUserId,
                productId:reviewProductId,
                review:req.body.review
            });
            await review.save();
            res.redirect('../product/'+ productName);
        }
    }
}