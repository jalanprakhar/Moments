const { default: mongoose } = require('mongoose');
const bcrypt=require('bcryptjs');
const jwt=require('jsonwebtoken');
const User=require('../models/user.js')
const userController={
    signin:async(req,res)=>{
        const {email,password} =req.body;


        try{
            const existingUser=await User.findOne({email});
            if(!existingUser) {
                return res.status(404).json({message:'User does not exist'})
            }
            const isPasswordCorrect=await bcrypt.compare(password,existingUser.password);
            if(!isPasswordCorrect){
                return res.status(400).json({message:"Invalid credentials"});
            }
            const token=jwt.sign({email:existingUser.email,id:existingUser._id},'test',{expiresIn:'1h'});
            res.status(200).json({result:existingUser,token});
        }catch(e){
            res.status(500).json({message:e.message});
        }
    },
    signup:async(req,res)=>{
        const {email,password,firstName,lastName,confirmPassword}=req.body;


        try{
            const existingUser=await User.findOne({email});
            if(existingUser){
                return res.status(400).json({message:'User already exists'});
            }

            if(password!==confirmPassword){
                return res.status(400).json({message:'Passwords dont match'});
            }

            const hashedPassword=await bcrypt.hash(password,12);

            const result=await User.create({
                email,
                password:hashedPassword,
                name:`${firstName} ${lastName}`
            })
            const token=jwt.sign({email:result.email,id:result._id},'test',{expiresIn:'1h'});


            res.status(200).json({result,token});
        }catch(e){
            res.status(500).json({
                message:e.message
            })
        }
    }
}

module.exports=userController;