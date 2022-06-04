const mongoose=require('mongoose');
const postSchema=mongoose.Schema({
    title:{
        type:String,
    },
    message:{
        type:String,
    },
    creator:{
        type:String,

        // required
    },
    name:String,
    tags:{
        type:[String]
    },
    selectedFile:{
        type:String,
    },
    createdAt:{
        type:Date,
        default:new Date()
    },


});

const PostMessage=mongoose.model('PostMessage',postSchema);

module.exports=PostMessage;