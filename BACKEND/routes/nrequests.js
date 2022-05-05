//write all http request for crud
const express = require('express');
const Nrequests = require('../models/nrequests');
const router =  express.Router();

//save new request
router.post('/nrequest/save',(req,res)=>{
    let newNrequest = new Nrequests(req.body) //access frontend detail
 
    newNrequest.save((err)=>{

        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:"New Product Request saved Successfully"
        });
    });
});

//read new product request

router.get('/nrequests',(req,res)=>{
    Nrequests.find().exec((err,nrequests)=>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
    return res.status(200).json({
        success:true, 
        existingNrequests : nrequests
    });
    
    });
});
//get a specific Request
router.get("/nrequest/:id",(req,res)=>{
    let nrequestId = req.params.id;     //pass post's id as parameter
    
Items.findById(nrequestId,(err,nrequest)=>{
    if(err){
        return res.status(400).json({success:false,err});
    }
        return res.status(200).json({
            success:true,
            nrequest
        });
});
 });

//cancel request
router.delete('/nrequest/delete/:id',(req,res)=>{
    Nrequests.findByIdAndRemove(req.params.id).exec((err,deletedNrequest) =>{
        if(err)
            return res.status(400).json({
                message:"Delete Unsuccessful",err
            
    });
    return res.status(200).json({
        message:"Delete Sucessfully",deletedNrequest
});

    });
});
module.exports = router;
