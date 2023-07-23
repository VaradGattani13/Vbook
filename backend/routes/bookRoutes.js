const express=require('express');
const bookRouter=express.Router();
const Book=require('../models/Book')


const asynchandler=require('express-async-handler');
const generateToken = require('../utils/generateToken');
const expressAsyncHandler = require('express-async-handler');

// Create a aBooK
bookRouter.post('/',asynchandler(async(req,res)=>{
    console.log(req.body);
    const bookCreated=await Book.create(req.body);
    // const book=await Book.create(req.body);
    if(bookCreated){
        res.status(200),
        res.json(bookCreated)
    }
    else{
        res.status(500);
        throw new Error('Book Cannot Be Added');

    }

}))




// Finding a Book
bookRouter.get('/',asynchandler(async(req,res)=>{
    console.log(req.body);
    const bookCreated=await Book.find({});
    // const book=await Book.create(req.body);
    if(bookCreated){
        res.status(200),
        res.json(bookCreated)
    }
    else{
        res.status(500);
        throw new Error('Book Cannot Be Added');

    }

}))










// Updating the Books
bookRouter.put('/:id',asynchandler(async(req,res)=>{
    // res.send(req.params.id)
    const book=await Book.findById(req.params.id);
    if(book){
        const updatedBook=await Book.findByIdAndUpdate(
            req.params.id,
            req.body,{
                new:true,
                runValidators:true,
            }
        );
        res.status(200);
        res.json(updatedBook);

    }
    else{
        res.status(500);
        throw new Error ('Book Upadation Failed! Try Again')
    }


}))






// Deleting the Book
bookRouter.delete('/:id',asynchandler(async(req,res)=>{
    try{

        const book=await Book.findByIdAndDelete(req.params.id);
        res.status(200);
        res.send(book);
    }
    catch(err){
        res.json(err);
    }
}))


module.exports=bookRouter;