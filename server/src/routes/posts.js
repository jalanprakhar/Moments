const express=require('express');
const postRouter=express.Router();
const postsController=require('../controllers/posts.js');

//http://localhost:8000/posts



postRouter.get('/',postsController.getPosts)


postRouter.post('/',postsController.createPost);


postRouter.patch('/:id',postsController.updatePost);
postRouter.patch('/:id/likepost',postsController.likePost);

postRouter.delete('/:id',postsController.deletePost);

module.exports= postRouter;