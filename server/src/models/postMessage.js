const mongoose=require('mongoose');
const postSchema=mongoose.Schema({
    title:{
        type:String,
    },
    message:{
        type:String,
    },
    creator:{
        String,
    },
    tags:{
        type:[String]
    },
    selectedFile:{
        type:String,
    },
    likeCount:{
        type:Number,
        default:0,
    },
    createdAt:{
        type:Date,
        default:new Date()
    },


});

const PostMessage=mongoose.model('PostMessage',postSchema);

module.exports=PostMessage;