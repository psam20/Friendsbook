// setting up Routes

const express=require('express');
//we need Router function from express module.
const router= express.Router();

const homeController=require('../controllers/home_controller');

console.log('router loaded ');
//this is a route we have set for the homeController
router.get('/',homeController.home);
//ROuter will use 'users.js' file which is present in router folder for /users url.
//syntax 
// router.use('/routerName',require('./routerFile'))
router.use('/user',require('./users'));

module.exports=router;