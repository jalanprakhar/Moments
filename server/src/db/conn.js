
const mongoose=require('mongoose');
console.log(`hiii ${process.env.DBASE_NAME}`);
mongoose.connect('mongodb://localhost:27017/moments').then(()=>{
    console.log(`Connection Successfull`)
}).catch((e)=>console.log(e));
