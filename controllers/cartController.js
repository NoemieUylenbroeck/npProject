let currentOrderModel = require("../models/cartModel");
let CurrentOrder = currentOrderModel.CurrentOrder;
let userModel = require("../models/userModel");
let User = userModel.User;
let productsModel = require("../models/productsModel");
let Product = productsModel.Product;

module.exports={
    //Function to display shop.ejs
    addProductToCart: async function(req, res) {
        let username = req.session.username;
        if(!username){
            res.redirect('../signin');
        }else{
        let productName = req.params.name;
        let number = req.body.number;
        let userId= (await User.findOne({username:username}).exec()).userId;
            let currentOrder = new CurrentOrder({
                username: username,
                userId:userId,
                orderedproducts : await Product.findOne({productId:req.body.productId}).exec(),
            });
            await currentOrder.save();
            console.log(currentOrder)
        }
    }
}
