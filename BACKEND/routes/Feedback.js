const router= require("express").Router();
const { disconnect } = require("mongoose");
let Feedback = require("../models/Feedback");

//add feedback
router.route("/addf").post((req,res)=> {

    const username = req.body.username;
    const email=req.body.email;
    const type=req.body.type;
    const contactNumber=req.body.contactNumber;
    const message=req.body.message 

    const newFeedback= new Feedback({ //new feedback object
    
        username,
        email,
        type,
        contactNumber,
        message 
    })

    newFeedback.save().then(()=>{
        //to be executed if successful
        res.json("Feedback Added")
    }).catch((err)=>{ //execute if not successful
              console.log(err);
    })

})

 //view all the data from table by passenger
router.route("/readf").get((req,res)=>{              
      Feedback.find().then((Feedback)=>{
            res.json(Feedback)
      }) .catch((err)=>{
           console.log(err)
      })
   
 })

 //view all the data from table by admin
router.route("/readfadmin").get((req,res)=>{              
    Feedback.find().then((Feedback)=>{
          res.json(Feedback)
    }) .catch((err)=>{
         console.log(err)
    })
 
})

  
 //view a specific feedback by id
 router.route("/getf/:id").get(async(req,res)=> {
    

    let userId= req.params.id;
    const user= await Feedback.findById(userId)
    .then((feedback) =>{
        res.status(200).send({ status : "user fetched",feedback})

    }).catch(()=> {
        console.log(err.message);
        res.status(500).send({status: "Error with fetch user"});
    })
 })
  

//update a feedback
router.route("/updatef/:id").put(async(req,res)=> {
       let userId= req.params.id; //passing id through url as a parameter
       const { username,email,type,contactNumber,message } =req.body; //destructure frontend variables passing to backend through a object

       const updateFeedback= {       
        username,
        email,
        type,
        contactNumber,
        message,
         
       }

       const update = await Feedback.findByIdAndUpdate(userId, updateFeedback).then(() =>{
        res.status(200).send({status: "User updated"})
       }).catch((err)=>{
           console.log(err);
           res.status(500).send({status: "Error with update data", error:err.message});
       })
        
})

//delete feedback
router.route("/deletef/:id").delete(async(req,res) =>{
       let userId=req.params.id;

       await Feedback.findByIdAndDelete(userId).then(() =>{
        res.status(200).send({status: "User deleted"})
    }).catch((err)=>{
        console.log(err);
        res.status(500).send({status: "Error with delete user", error:err.message});
    })
       
})

module.exports = router;