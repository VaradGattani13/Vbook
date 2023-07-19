const mongoose=require('mongoose')
const dotenv=require('dotenv');

mongoose.set('strictQuery', false);
dotenv.config();


const dbConnect=()=>{


// Connecting DataBase
mongoose.connect(process.env.MONGODB_URI)
.then(()=>{
    console.log('Database Connected Successfuly');
}).catch((e)=>{
    console.log('Connection Failed');

})
}

module.exports=dbConnect;