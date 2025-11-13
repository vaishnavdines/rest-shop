const express=require('express');
const router=express.Router();
router.get('/',(res,req)=>{
    res.statusCode(200).json({
        message:'Fetched all user data',
        users:['Alice','Bob','Charlie']
    });
});
router.post('/',(req,res)=>{
    const user=req.body;
    res.status(201).json({
        message:'user created successfully',
        user:user
    });
});
router.get('/:userId',(req,res)=>{
    const id=req.params.userId;
    res.status(201).json({
        message:'Fetched user with ID:${id}',
        user:{id,name:'Alice example'}
    });
});
router.delete('/:userId',(res,req)=>{
    const is=req.params.userId;
    res.status(200).json({
        message:'Deleted user with ID:${ID}'
    });
});
module.exports=router;