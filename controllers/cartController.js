let cartModel = require("../models/cartModel");
let Cart = cartModel.Cart;
let userModel = require("../models/userModel");
let User = userModel.User;
let productsModel = require("../models/productsModel");
let Product = productsModel.Product;

module.exports={
    display:function(req,res){
        let username = req.session.username;
        let admin = req.session.admin;
        Cart.find({username:username},{'_id':0, 'orderedproduct':1, 'numberproduct':1, 'totalprice':1}, function (err, cart){
            if (err) {
                return handleError(err);
            } else {
                let displayCart = Object.values(cart);
                let totalPriceCart = 0;
                for(let i=0; i < cart.length; i++){
                    totalPriceCart = totalPriceCart + parseInt(cart[i].totalprice);
                };
                res.render('../views/cart', {username: username, admin:admin,cart: displayCart, totalPriceCart:totalPriceCart});
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
        let findOneProduct = await Cart.findOne({userId:userId, orderedproduct:productName});
        if(findOneProduct){
            let productPrice = (await Product.findOne({name:productName})).price;
            findOneProduct.numberproduct= parseInt(findOneProduct.numberproduct) + parseInt(number);
            findOneProduct.totalprice = parseInt(findOneProduct.numberproduct)*productPrice;
            await findOneProduct.save();
        }else{
            let productPrice = (await Product.findOne({name:productName})).price;
            let cart = new Cart({
            username: username,
            userId:userId,
            orderedproduct:productName,
            numberproduct:number,
            totalprice: parseInt(number)*parseInt(productPrice),
            });
            await cart.save();}
        }
    },
    addnumbercart: async function (req,res){
        let productName = req.params.productname;
        let number = req.body.number;
        let cartNumber = (await Cart.findOne({orderedproduct:productName}).exec()).numberproduct;
        let newCartNumber = parseInt(number) + parseInt(cartNumber);
        let productPrice = (await Product.findOne({name:productName})).price;
        let newProductPrice = parseInt(newCartNumber) * parseInt(productPrice);
        await Cart.updateOne({orderedproduct:productName}, {numberproduct:newCartNumber, totalprice:newProductPrice});
        res.redirect('/cart');

    },
    deleteproductcart: function(req,res){
        let productName = req.params.productname;
        Cart.deleteOne({orderedproduct:productName}, function (err) {
            if (err) return handleError(err);
        });
        res.redirect('/cart');
    },
    order: function(req,res){
        
    }
}
