const express = require('express');
let router = express.Router();

const homeController=require('./controllers/home');
const shopController=require('./controllers/shop');
const calendarController=require('./controllers/calendar');
const contactController=require('./controllers/contact');
const signInController=require('./controllers/signin');
const signUpController=require('./controllers/signup');

// Prend le controller avec la fonction correspondante
router.get('/', homeController.display );
router.get('/home', homeController.display );
router.get('/shop', shopController.display );
router.get('/calendar', calendarController.display );
router.get('/contact', contactController.display );
router.get('/signin', signinController.display );
router.get('/signup', signupController.display );

module.exports = router;