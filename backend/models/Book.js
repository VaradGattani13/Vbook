const mongoose=require('mongoose')



const BookSchema=new mongoose.Schema({
    category:{
        type:String,
        required:[true,'Book  should have a cateogry'],

    },
    author:{
        type:String,
        required:true,

    },
    title:{
        type:String,
        required:true,

    },
addedBy:{
    // Adding from user Model
    type:mongoose.Schema.Types.ObjectId,
    ref:'User',
    required:true,

},
},
    {
    timestamps:true,
    }

)


const Book=mongoose.model('Bool',BookSchema)
module.exports=Book;