const { default: mongoose } = require('mongoose');
const PostMessage=require('../models/postMessage.js');
const { post } = require('../routes/posts.js');

const postsController={
    getPosts:async (req,res)=>{
        try{
            const postMessages=await PostMessage.find();
            // console.log(postMessages);
            res.status(200).json(postMessages);
        }catch(e){
            res.status(404).json({message:e.message})
        }
    },
    createPost:async(req,res)=>{
        const post=req.body
        // console.log(post);
        const newPost=new PostMessage({...post,creator:req.userId,createdAt:new Date().toISOString()});
        // console.log(newPost);
        try{
            await newPost.save();
            res.status(201).json(newPost);
        }catch(e){
            res.status(409).json({message:e.message});
        }
    },
    updatePost:async(req,res)=>{
        
        const {id:_id}=req.params;
        const post=req.body;
        if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('No such post with that id');

        const updatedPost=await PostMessage.findByIdAndUpdate(_id,{...post,_id},{new:true})
        res.status(201).json(updatedPost);
        
    },
    deletePost:async(req,res)=>{
        const {id:_id} =req.params;
        if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('No such post with that id');
        await PostMessage.findByIdAndRemove(_id);
        res.json({message:'Deleted'})
    }
}
module.exports=postsController;