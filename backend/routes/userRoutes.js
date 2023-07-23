const express=require('express');
const userRouter=express.Router();
const User=require('../models/User')

const asynchandler=require('express-async-handler');
const generateToken = require('../utils/generateToken');
const authMiddlware = require('../middlewares/authMiddleware');
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
    // res.send(userCreated)
        res.json({
            _id:userCreated._id,
            email:userCreated.email,
            password:userCreated.password,
            name:userCreated.name,
            token:userCreated.token,
        })
  
})
)





// Get All users
userRouter.get('/usersList', async function (req, res) {
  try {
    // console.log("BFERFER")
    const users = await User.find(); // Assuming you want to find a single user document
    res.send(users);
  } catch (err) {
    console.error('Error finding user:', err);
    res.status(500).send('Internal Server Error');
  }
});

userRouter.post("/login",asynchandler(async(req,res)=>{
    // res.send('Login Route')


const {email,password}=req.body;
const user=await User.findOne({email});
    if(user && (await user.isPasswordMatch(password))){
        res.status(200);
        res.json({
            _id:user._id,
            name:user.name,
            email:user.email,
            password:user.password,
            token:generateToken(user._id)
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

//Updating user ->Iski details dekhna Padegi ek bar

userRouter.put(    
    '/profile/update',
    authMiddlware,
    asynchandler(async (req, res) => {
      const user = await User.findById(req.user._id);
      if (user) {
        user.name = req.body.name || user.name;
        user.email = req.body.email || user.email;
        //This will encrypt automatically in our model
        if (req.body.password) {
          user.password = req.body.password || user.password;
        }
        const updateUser = await user.save();
        res.json({
          _id: updateUser._id,
          name: updateUser.name,
          password: updateUser.password,
          email: updateUser.email,
          token: generateToken(updateUser._id),
        });
      } else {
        res.status(401);
        throw new Error('User Not found');
      }
    })
  );
  










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
