const express = require('express');
let router = express.Router();

const homeController=require('./controllers/home');

// Prend le controller avec la fonction correspondante
router.get('/', homeController.display );
router.get('/home', homeController.display );

module.exports = router;