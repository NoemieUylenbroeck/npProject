module.exports={
    //Function to display home.ejs
    display:function(req, res) {
        let username = req.session.username;
        res.render('../views/home', {username: username});
   }
}