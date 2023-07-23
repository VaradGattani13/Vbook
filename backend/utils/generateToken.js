const jwt=require('jsonwebtoken')
const dotenv=require('dotenv');

// mongoose.set('strictQuery', false);
dotenv.config();


const generateToken=(userId)=>{
    return jwt.sign({id:userId},process.env.JWT_SECRET_KEY,{
        expiresIn:'30d',

    })

}

module.exports=generateToken;