const jwt=require('jsonwebtoken');
const auth=async(req,res,next)=>{
    try{

        const token=req.headers.authorization.split(" ")[1];

        
        if(token){
            const decodedData=jwt.verify(token,'test');


            req.userId=decodedData?.id;
        }
        next();


    }catch(e){
        console.log(e);
    }
}

module.exports=auth;
