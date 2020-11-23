module.exports={
    //Function to display calendar.ejs
    display:function(req, res) {
        let username = req.session.username;
        let admin = req.session.admin;
        res.render('../views/calendar', {username: username, admin:admin});
   }
}