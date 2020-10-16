module.exports={
    //Function to display shop.ejs
    display:function(req, res) {
        let username = req.session.username;
        res.render('../views/shop', {username: username});
   }
}