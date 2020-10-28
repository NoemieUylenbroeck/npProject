let reviewModel = require("../models/reviewModel");
let Review = reviewModel.Review;
let userModel = require("../models/userModel");
let User = userModel.User;

module.exports={
    //Function to display contact.ejs
    display: async function(req, res) {
        let username = req.session.username;
        let reviewUserId= (await User.findOne({username:username}).exec()).userId;
        let review = await Review.find({userId:reviewUserId}).exec();
        res.render('../views/account', {username: username, review:review});
   }
}