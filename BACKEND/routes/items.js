//write all http request for crud
const express = require('express');
const Items = require('../models/items');
const router =  express.Router();

//save new request
router.post('/item/save',(req,res)=>{
    let newItem = new Items(req.body) //access frontend detail
 
    newItem.save((err)=>{

        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:"Item saved Successfully"
        });
    });
});

//read new product request

router.get('/items',(req,res)=>{
    Items.find().exec((err,items)=>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
    return res.status(200).json({
        success:true, 
        existingItems : items
    });
    
    });
});
//get a specific Request
router.get("/item/:id",(req,res)=>{
    let itemId = req.params.id;     //pass post's id as parameter
    
Items.findById(itemId,(err,item)=>{
    if(err){
        return res.status(400).json({success:false,err});
    }
        return res.status(200).json({
            success:true,
            item
        });
});
 });
//update Item
router.put('/item/update/:id',(req,res)=>{
    Items.findByIdAndUpdate(
        req.params.id,
        {
            $set:req.body
        },
    (err,item)=>{
        if(err){
            return res.status(400).json({error:err});
        }
    return res.status(200).json({
        success:"Updated Sucessfully "
    });
    }
    );
});


//cancel item
router.delete('/item/delete/:id',(req,res)=>{
    Items.findByIdAndRemove(req.params.id).exec((err,deletedItem) =>{
        if(err)
            return res.status(400).json({
                message:"Delete Unsuccessful",err
            
    });
    return res.status(200).json({
        message:"Delete Sucessfully",deletedItem
});

    });
});
module.exports = router;

