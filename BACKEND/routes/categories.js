//write all http request for crud
const express = require('express');
const Categories = require('../models/categories')
const router =  express.Router();

//save 
router.post('/category/save',(req,res)=>{
    let newCategory = new Categories(req.body) //access frontend detail
 
    newCategory.save((err)=>{

        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:"Category saved Successfully"
        });
    });
});

//read Category

router.get('/categories',(req,res)=>{
    Categories.find().exec((err,categories)=>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
    return res.status(200).json({
        success:true, 
        existingCategories : categories
    });
    
    });
});
//get a specific bookings
router.get("/category/:id",(req,res)=>{
    let categoryId = req.params.id;     //pass post's id as parameter
    
Categories.findById(categoryId,(err,category)=>{
    if(err){
        return res.status(400).json({success:false,err});
    }
        return res.status(200).json({
            success:true,
            category
        });
});
 });

//update categories
router.put('/category/update/:id',(req,res)=>{
    Categories.findByIdAndUpdate(
        req.params.id,
        {
            $set:req.body
        },
    (err,category)=>{
        if(err){
            return res.status(400).json({error:err});
        }
    return res.status(200).json({
        success:"Updated Sucessfully "
    });
    }
    );
});

//cancel bookings
router.delete('/category/delete/:id',(req,res)=>{
    Categories.findByIdAndRemove(req.params.id).exec((err,deletedCategory) =>{
        if(err)
            return res.status(400).json({
                message:"Delete Unsuccessful",err
            
    });
    return res.status(200).json({
        message:"Delete Sucessfully",deletedCategory
});

    });
});
module.exports = router;

