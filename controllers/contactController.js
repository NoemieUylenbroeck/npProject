module.exports={
    //Function to display contact.ejs
    display:function(req, res) {
        let username = req.session.username;
        let admin = req.session.admin;
        res.render('../views/contact', {username: username, admin:admin});
   }
}