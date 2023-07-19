const express=require('express');
const userRouter=express.Router();
const User=require('../models/User')

const asynchandler=require('express-async-handler');
userRouter.post("/register",asynchandler(async(req,res)=>{

    // Async Hadler
    const {name,email,password}=req.body;
    const userExists=await User.findOne({email:email});
    if(userExists){
        throw new Error('User Exist Check your mail');
    }

    const userCreated=await User.create({name,email,password});




    //Nomrl sync wala hai ye
    // try{
    //     // console.log(req.body)
    //     // Destructring the content of req.body

    //     const {name,email,password}=req.body;
    //     // const user=User.create(req.body);
    //     // or
    //     const user=await User.create({name,email,password});
    //     // console.log(user)
    //     res.send(user);
        

    // }catch(err){
    //     console.log(err);
         
    // } 
    res.send(userCreated)
 
  
})
)
userRouter.get("/api/users",(req,res)=>{
    res.send('User Added');

})

userRouter.post("/login",asynchandler(async(req,res)=>{
    // res.send('Login Route')


const {email,password}=req.body;
const user=await User.findOne({email});
    if(user){
        res.status(200);
        res.json({
            _id:user._id,
            name:user.name,
            email:user.email,
            password:user.password
        })
    }
    else{
        res.status(401);
        throw new Error('Invalid Credentials')
        // res.send('User Does Not Exist')
    }

    // Testing
    // user?res.send(user):res.send('User Does Not Exists')

}))

//Updating user
userRouter.put("/register",(req,res)=>{
    res.send('Update Route')
})








// // Adding Routes


// // User routes
// // Register  ->Need to be asunc awairt as deals with the data from server

// app.use("/api/users",userRoutes)  


// // Login Routes
// app.post("/api/users/login",(req,res)=>{
//     res.send('Login Route')
// })

// //Updating user
// app.put("/api/users/register",(req,res)=>{
//     res.send('Update Route')
// })





// // Deleting the user
// app.delete("/api/users/:id",(req,res)=>{
//     res.send("User Deleted"); 
// })





// Deleting the user
userRouter.delete("/:id",(req,res)=>{
    res.send("User Deleted"); 
})

module.exports=userRouter;
