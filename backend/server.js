const express=require('express')
const app=express();
const error=require('./middlewares/errorMiddleware')
const PORT=5555 || process.env.PORT
const mongoose=require('mongoose');
const dotenv=require('dotenv');
const dbConnect = require('./config/dbConnect');
// const User = require('./models/User.js');
const userRoutes=require('./routes/userRoutes.js')
const asynchandler=require('express-async-handler');
const bookRouter = require('./routes/bookRoutes');
const cors=require('cors');


// Other wayto call db
// require('./congif/dbConnect)()
// /Would work the same as calling function/
// Connecting Db;
dbConnect();

app.use(cors());



// Setting Up middlewares
app.use(express.json());


// Error MiddleWre
app.use(error.errorMiddleware);




// User Routes
app.use("/api/users",userRoutes)  

// Book Routes
app.use('/api/books',bookRouter);






app.get("/",(req,res)=>{  
    res.send("Hello")
})

  



app.listen(PORT,()=>{
    console.log(`Server Running @  PORT ${PORT}`);

})