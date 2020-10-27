module.exports={
    //Function to display shop.ejs
    display:function(req, res) {
        res.render('../views/product', {username: username, productsValues: name});
    }
}