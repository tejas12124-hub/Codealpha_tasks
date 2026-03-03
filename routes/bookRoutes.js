const express = require("express");
const router = express.Router();
const Book = require("../models/Book");

router.get("/",async(req,res)=>{
    const books=await Book.find();
    res.json(books);
});

router.get("/:id",async(req,res)=>{
    try{
    const book=await Book.findById(req.params.id);

    if(!book){
        return res.status(404).json({message:"Book not found"});
    }
    res.json(book);
}catch(err){
     res.status(500).json({ message: err.message });
}
});

module.exports=router;