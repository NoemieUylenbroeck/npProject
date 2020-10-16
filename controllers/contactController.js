module.exports={
    //Function to display contact.ejs
    display:function(req, res) {
        let username = req.session.username;
        res.render('../views/contact', {username: username});
   }
}