module.exports={
    //Function to sign out
    signout:function(req, res) {
        req.session.destroy((err) => {
            if(err) {
                return console.log(err);
            }
            console.log("Signed Out");
            res.redirect('/');
        });
    }
}

