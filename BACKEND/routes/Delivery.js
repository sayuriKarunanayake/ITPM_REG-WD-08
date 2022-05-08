const router= require("express").Router();
const { disconnect } = require("mongoose");
let Delivery= require("../models/Delivery");
 

//add order by user
router.route("/adddelivery").post((req,res)=> {

    const username=req.body.username;
    const contactNumber=req.body.contactNumber;
    const  email=req.body.email;
    const homeno=req.body.homeno;
    const street=req.body.street;
    const city=req.body.city;
    const province=req.body.province;
    const deliveryTime=req.body.deliveryTime;
     

   

    const newDelivery= new Delivery({ //new feedback object
        
        username,
        contactNumber,
        email,
        homeno,
        street,
        city,
        province,
        deliveryTime
 
    })

    newDelivery.save().then(()=>{
        //to be executed if successful
        res.json("Delivery details Added")

    }).catch((err)=>{ //execute if not successful
              console.log(err);
    })

 
})

 

 //view all the delivery by admin
router.route("/readdelivery").get((req,res)=>{              
     Delivery.find().then(( Delivery)=>{
            res.json(Delivery)
      }) .catch((err)=>{
           console.log(err)
      })
   
 })


 //view a specific order by id
 router.route("/getdelivery/:id").get(async(req,res)=> {
    

    let userId= req.params.id;
    const user= await  Delivery.findById(userId)
    .then((Delivery) =>{
        res.status(200).send({ status : "delivery fetched", Delivery})

    }).catch(()=> {
        console.log(err.message);
        res.status(500).send({status: "Error with fetch delivery"});
    })
 })
    
/*view a specific user by email
router.route("/user/:email").get(async(req,res)=> {
    

    let userEmail= req.params.email;
    const user= await  Register.findOne(userEmail)
    .then(( Register) =>{
        res.status(200).send({ status : "user data has fetched", Register})

    }).catch(()=> {
        console.log(err.message);
        res.status(500).send({status: "Error with fetch user"});
    })
 })
*/
 

//update a delivery
router.route("/updatedelivery/:id").put(async(req,res)=> {
       let userId= req.params.id; //passing id through url as a parameter
       const { username, contactNumber, email, homeno, street,city,province,deliveryTime } =req.body; //destructure frontend variables passing to backend through a object

       const updateDelivery= {       
        
        username,
        contactNumber,
        email,
        homeno,
        street,
        city,
        province,
        deliveryTime,
         
       }

       const update = await Delivery.findByIdAndUpdate(userId, updateDelivery).then(() =>{
        res.status(200).send({status: "delivery updated"})
       }).catch((err)=>{
           console.log(err);
           res.status(500).send({status: "Error with update data", error:err.message});
       })
        
})



//delete delivery
router.route("/deletedelivery/:id").delete(async(req,res) =>{
       let userId=req.params.id;

       await  Delivery.findByIdAndDelete(userId).then(() =>{
        res.status(200).send({status: "delivery deleted"})
    }).catch((err)=>{
        console.log(err);
        res.status(500).send({status: "Error with delete delivery", error:err.message});
    })
       
})

module.exports = router; 