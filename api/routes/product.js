const express=require('express');
const router=express.Router();
router.get('/',(req,res)=>{
    res.status(200).json({
        message:'Fetched all products successfully',
        products:['Laptop','Phone','Keyboard']
    });
});
router.post('/',(res,req)=>{
    const product=req.body;
    res.status(201).json({
        message:'Product added successfully',
        product:product
    });
});
module.exports=router