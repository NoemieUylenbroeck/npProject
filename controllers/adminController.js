let productsModel = require("../models/productsModel");
let Product = productsModel.Product;
let reviewModel = require("../models/reviewModel");
let Review = reviewModel.Review;

module.exports={
    display: async function(req, res) {
        let username = req.session.username;
        let admin = req.session.admin;
        let products = await Product.find({},{'_id':0, 'name':1, 'productId':1, 'description':1, 'price':1});
        let productsValues = Object.values(products);
        let reviews = await Review.find({},{'_id':0, 'username':1, 'productName':1, 'review':1, 'reviewId':1});
        let reviewsValues = Object.values(reviews);
        res.render('../views/admin', {username: username, admin:admin, productsValues: productsValues, reviewsValues:reviewsValues});
    },
    addproduct: async function(req, res){
    let product = await Product.findOne({ name: req.body.name });
        if (product) {
        return res.status(400).send('That product already exists!');
        } else {
            product = new Product({
                name: req.body.name,
                description: req.body.description,
                price: req.body.price,
                image: req.body.imagetitle,
            });
        await product.save();
        res.redirect('../admin')
        console.log("Product added: " + product.name)
        }
    },
    deleteproduct: async function(req, res){
        let productId=req.params.productId;
        Product.deleteOne({productId:productId}, function (err) {
            if (err) return handleError(err);
        });
        console.log("removed :" + productId)
        res.redirect('/admin');
    },
    deletereview: async function(req, res){
        let reviewId=req.params.reviewId;
        Review.deleteOne({reviewId:reviewId}, function (err) {
            if (err) return handleError(err);
        });
          console.log("removed :" + reviewId);
           res.redirect('../admin');
       },
}