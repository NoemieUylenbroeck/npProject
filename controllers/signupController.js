let userModel = require("../models/userModel");
const bcrypt = require('bcrypt');
let User = userModel.User;

module.exports={
    //Function to display signup.ejs
    display:function(req, res) {
        let username = req.session.username;
        res.render('../views/signup', {username: username});
   },
   //Function to register an user (without passport)
   signup: async function(req, res){
       let user = await User.findOne({ email: req.body.email });
       if (user) {
           return res.status(400).send('That user already exists!');
        } else {
            // Insert the new user if they do not exist yet
            user = new User({
                username: req.body.username,
                email: req.body.email,
                password: req.body.password,
                newsletter:req.body.newsletter
            });
            const salt = await bcrypt.genSalt(10);
            user.password = await bcrypt.hash(user.password, salt);
            await user.save();
            res.redirect('../signin');
        }
    }
}