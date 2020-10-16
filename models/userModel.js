const mongoose = require("mongoose");
const autoIncrement = require('mongoose-auto-increment');

const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true,
    },
    newsletter:{
        type:String,
        required:true,
    }
});

userSchema.plugin(autoIncrement.plugin, { model: 'User', field: 'userId', startAt: 1 });
const User = mongoose.model("User", userSchema);

exports.User = User;