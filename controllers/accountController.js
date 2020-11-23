const Product = require("../models/productsModel");
let reviewModel = require("../models/reviewModel");
let Review = reviewModel.Review;
let userModel = require("../models/userModel");
let User = userModel.User;

module.exports={
    //Function to display contact.ejs
    display: async function(req, res) {
        let username = req.session.username;
        let admin = req.session.admin;
        let reviewUserId= (await User.findOne({username:username}).exec()).userId;
        let review = await Review.find({userId:reviewUserId}).exec();
        res.render('../views/account', {username: username, admin:admin, review:review});
   },
   deletereview: function(req,res){
       let reviewId=req.params.reviewId;
       Review.deleteOne({reviewId:reviewId}, function (err) {
        if (err) return handleError(err);
    });
      console.log("removed :" + reviewId);
       res.redirect('../account');
   },
   
   updatereview:function(req,res){
      
   }
}