const Product = require("../models/productsModel");
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
   },
   deletereview: function(req,res){
       let deleteReviewId=req.params.reviewid;
       console.log(deleteReviewId);
       Review.deleteOne({reviewId: deleteReviewId}, function(err){
           if(err){
               return console.log(err);
           } else{
               return console.log("removed");
           }
       });
       res.redirect('../account');
   }
}