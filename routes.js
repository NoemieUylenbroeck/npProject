const express = require('express');
let router = express.Router();

const homeController=require('./controllers/homeController');
const shopController=require('./controllers/shopController');
const calendarController=require('./controllers/calendarController');
const contactController=require('./controllers/contactController');
const accountController=require('./controllers/accountController');
const signInController=require('./controllers/signinController');
const signUpController=require('./controllers/signupController');
const signOutController=require('./controllers/signoutController');
const adminController=require('./controllers/adminController');

// Take the right controller with the fonction needed
router.get('/', homeController.display );
router.get('/home', homeController.display );
router.get('/shop', shopController.display );
router.get('/calendar', calendarController.display );
router.get('/contact', contactController.display );
router.get('/account', accountController.display );
router.get('/signin', signInController.display );
router.post('/signin', signInController.signin );
router.get('/signup', signUpController.display );
router.post('/signup', signUpController.signup );
router.get('/signout', signOutController.signout );
router.get('/admin', adminController.display );
router.post('/adminaddproduct', adminController.addproduct );

module.exports = router;