const router= require("express").Router();
const { disconnect } = require("mongoose");
let Order= require("../models/Order");
 

//add order by user
router.route("/addorder").post((req,res)=> {

    const itemName = req.body.itemName;
    const itemCode = req.body.itemCode;
    const itemColour = req.body.itemColour ;
    const username = req.body.username;

    const newOrder= new Order({ //new feedback object
        itemName,
        itemCode,
        itemColour,
        username
       
    })

    newOrder.save().then(()=>{
        //to be executed if successful
        res.json("order Added")

    }).catch((err)=>{ //execute if not successful
              console.log(err);
    })

 
})

 

 //view all the orders by admin
router.route("/readorder").get((req,res)=>{              
     Order.find().then(( Order)=>{
            res.json( Order)
      }) .catch((err)=>{
           console.log(err)
      })
   
 })


 //view a specific order by id
 router.route("/getorder/:id").get(async(req,res)=> {
    

    let userId= req.params.id;
    const user= await  Order.findById(userId)
    .then(( Order) =>{
        res.status(200).send({ status : "order fetched", Order})

    }).catch(()=> {
        console.log(err.message);
        res.status(500).send({status: "Error with fetch order"});
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
 

//update a feedback
router.route("/updateorder/:id").put(async(req,res)=> {
       let userId= req.params.id; //passing id through url as a parameter
       const { itemName,itemCode, itemColour ,username } =req.body; //destructure frontend variables passing to backend through a object

       const updateOrder= {       
        itemName,
        itemCode,
        itemColour,
        username 
         
       }

       const update = await Order.findByIdAndUpdate(userId, updateOrder).then(() =>{
        res.status(200).send({status: "order updated"})
       }).catch((err)=>{
           console.log(err);
           res.status(500).send({status: "Error with update data", error:err.message});
       })
        
})



//delete order
router.route("/deleteorder/:id").delete(async(req,res) =>{
       let userId=req.params.id;

       await  Order.findByIdAndDelete(userId).then(() =>{
        res.status(200).send({status: "order deleted"})
    }).catch((err)=>{
        console.log(err);
        res.status(500).send({status: "Error with delete order", error:err.message});
    })
       
})

module.exports = router; 