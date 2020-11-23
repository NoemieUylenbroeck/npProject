let userModel = require("../models/userModel");
const bcrypt = require('bcrypt');

module.exports={
    //Function to display signin.ejs
    display:function(req, res) {
        let username = req.session.username;
        let admin = req.session.admin;
        res.render('../views/signin', {username: username, admin:admin});
   },
   //Function to signin
   signin: async (req, res) => {
       let user = await userModel.User.findOne({ username: req.body.username });
       if (!user) {
           return res.status(400).send('Incorrect username or password.');
        }
        const validPassword = await bcrypt.compare(req.body.password, user.password);
        if (!validPassword) {
            return res.status(400).send('Incorrect email or password.');
        }
        req.session.username= req.body.username;
        req.session.admin= user.admin;
        console.log("admin :" + req.session.admin);
        console.log("Signed In: " + req.session.username);
        res.redirect('../home');
    }
}