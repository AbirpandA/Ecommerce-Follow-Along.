const jwt = require('jsonwebtoken')
require('dotenv').config()

const verifytoken =(req,res,next)=>{
    
    const authHeader = req.headers.authorization;


    if (!authHeader || !authHeader.startsWith("Bearer ")) {
        return  res.status(400).json({message:"authorization falied no token provided"})
    }
    const token=authHeader.split(" ")[1]
    try{
    const decoded = jwt.verify(token,process.env.SECRET_KEY)
    // console.log(decoded)
    req.user=decoded
    next()
    }catch(err){
        return res.status(403).json({ message: "Invalid or expired token." ,error:err.message});
    }
}

module.exports = verifytoken