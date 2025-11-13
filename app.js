const express=require('express');
const app=express();
const productRoutes=require('./api/routes/product');
const userRoutes=require('./api/routes/user');
app.use(express.json());
app.use('/products',productRoutes);
app.use('/users',userRoutes);
app.get('/',(req,res)=>{
    res.status(200).json({message:'server is running'});
});
module.exports=app;