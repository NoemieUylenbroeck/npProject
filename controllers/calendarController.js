module.exports={
    //Function to display calendar.ejs
    display:function(req, res) {
        let username = req.session.username;
        res.render('../views/calendar', {username: username});
   }
}