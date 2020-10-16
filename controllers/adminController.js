let adminModel = require("../models/adminModel");
let Product = adminModel.Product;

module.exports={
     //Function to display signup.ejs
     display:function(req, res) {
        let username = req.session.username;
        res.render('../views/admin', {username: username});
   },
   //Function to register an user (without passport)
   addproduct: async function(req, res){
    let product = await Product.findOne({ name: req.body.name });
    if (product) {
        return res.status(400).send('That product already exists!');
     } else {
         // Insert the new user if they do not exist yet
         product = new Product({
             name: req.body.name,
             description: req.body.description,
             price: req.body.price,
         });
         await product.save();
         res.redirect('../admin')
         console.log("Product added: " + product.name)
     }
 }
}