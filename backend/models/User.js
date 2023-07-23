const mongoose=require('mongoose');
// Adding Hashing for users
const brcypt=require('bcryptjs')
// Schema For Model


const UserSchema=mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,

    },
    password:{
        type:String,
        required:true
    },
   
})




// middleWAre  pre se save krne ke pehle password automatically ahsh hojaega or hashed password databasde mai save hoga
UserSchema.pre('save',async function(next){
    const salt=await brcypt.genSalt(10);
    console.log(this.password);
    // this gives the object of user
    this.password=await brcypt.hash( this.password,salt);
    // next();

})


// Verify User
// Ispasswrod match function hai
UserSchema.methods.isPasswordMatch=async function(entreredPassword){


return await brcypt.compare(entreredPassword,this.password);

}





const User=mongoose.model('User',UserSchema);

module.exports=User;
