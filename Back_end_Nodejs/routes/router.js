const express=require('express');
const router=express.Router();
const userController=require('../controllers/clientController.js')
const validationController=require('../validation/index.js')
const loginController=require('../controllers/loginCotroller.js')

router.post('/create-client',validationController.createClientValidation,userController.createClient);
router.get('/get-all-clients',userController.getClients);
router.post('/client-login',loginController.login)
router.post('/account-verification',userController.account_verification)
// router.get('/essai',loginController.showing);



module.exports=router;