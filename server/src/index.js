
const express=require('express');
require('./db/conn')
const cors=require('cors');
const server=express();
const port=process.env.PORT || 8000;
const postRouter=require('./routes/posts.js');
const userRouter=require('./routes/user.js');
server.use(express.json(
    {limit:'200mb'}
));
server.use(cors());




server.use('/posts',postRouter);

server.use('/user',userRouter);


server.listen(port,()=>{
    console.log('Listening');
})