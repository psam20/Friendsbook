// setting up Routes

const express=require('express');
//we need Router function from express module.
const router= express.Router();

const homeController=require('../controllers/home_controller');

console.log('router loaded ');
//this is a route we have set for the homeController
router.get('/',homeController.home);

module.exports=router;