const express = require("express");
const bodyParser = require("body-parser");
const mongoose=require("mongoose");
const autoIncrement = require('mongoose-auto-increment');
const session=require('express-session');
const app = express();

// Session
app.use(session({ 
  // It holds the secret key for session 
  secret: 'Your_Secret_Key', 
  // Forces the session to be saved back to the session store 
  resave: true, 
  // Forces a session that is "uninitialized" to be saved to the store 
  saveUninitialized: true
}));

//Syntaxe to use body-parser
app.use(bodyParser.urlencoded({extended : true}));

//Syntaxe to use EJS + use CSS/images
app.set('view engine', 'ejs');
app.use(express.static("\public"));

//Connection database
mongoose.connect('mongodb://localhost:27017/npProject',
  { useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false})
  .then(() => console.log("Connected to db (27017)"))
  .catch(() => console.log("Connection to db failed"));

autoIncrement.initialize(mongoose.connection);

//Take the router
let router = require('./routes');
app.use(router);

//Set up localhost
app.listen(3000, function(){
    console.log("Server on 3000 activated.");
})