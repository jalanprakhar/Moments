const express=require('express');
const postRouter=express.Router();
const postsController=require('../controllers/posts.js');

//http://localhost:8000/posts



postRouter.get('/',postsController.getPosts)


postRouter.post('/',postsController.createPost);

module.exports= postRouter;