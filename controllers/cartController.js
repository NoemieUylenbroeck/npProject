let currentOrderModel = require("../models/cartModel");
let CurrentOrder = currentOrderModel.CurrentOrder;
let userModel = require("../models/userModel");
let User = userModel.User;
let productsModel = require("../models/productsModel");
let Product = productsModel.Product;

module.exports={
    display:function(req,res){
        let username = req.session.username;
        CurrentOrder.find({username:username},{'_id':0, 'orderedproduct':1, 'numberproduct':1}, function (err, currentOrder){
            if (err) {
                return handleError(err);
            } else {
                let cart = Object.values(currentOrder);
                res.render('../views/cart', {username: username,cart: cart});
            }
        });
    },

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
                orderedproduct:productName,
                numberproduct:number,
            });
            await currentOrder.save();
            console.log(currentOrder)
        }
    },
    addnumbercart: function (req,res){
        let productName = req.params.productname;
        let number = req.body.number;

    },
    deleteproductcart: function(req,res){
        let productName = req.params.productname;
    }
}
