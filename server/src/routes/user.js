const express=require('express');
const userRouter=express.Router();
const userController=require('../controllers/user');

//http://localhost:8000/user


userRouter.post('/signin',userController.signin)
userRouter.post('/signup',userController.signup)







module.exports= userRouter;