let productsModel = require("../models/productsModel");
let Product = productsModel.Product;

module.exports={
    //Function to display shop.ejs
    display:function(req, res) {
        let username = req.session.username;
        let admin = req.session.admin;
        Product.find({},{'_id':0, 'name':1, 'description':1, 'price':1, 'image':1}, function (err, products){
            if (err) {
                return handleError(err);
            } else {
                productsValues = Object.values(products);
                res.render('../views/shop', {username: username, admin:admin, productsValues: productsValues});
            }
        });
   }
}