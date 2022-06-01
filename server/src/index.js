
const express=require('express');
require('./db/conn')
const cors=require('cors');
const app=express();
const port=process.env.PORT || 8000;
const postRouter=require('./routes/posts.js');
app.use(express.json(
    {limit:'200mb'}
));
app.use(cors());




app.use('/posts',postRouter);




app.listen(port,()=>{
    console.log('Listening');
})