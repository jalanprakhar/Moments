const express=require('express');
const postRouter=express.Router();
const postsController=require('../controllers/posts.js');
const auth=require('../middleware/auth.js');
//http://localhost:8000/posts



postRouter.get('/',postsController.getPosts)


postRouter.post('/',auth,postsController.createPost);


postRouter.patch('/:id',auth,postsController.updatePost);

postRouter.delete('/:id',auth,postsController.deletePost);

module.exports= postRouter;