const router= require("express").Router();
const { disconnect } = require("mongoose");
let Register = require("../models/Register");

//add feedback by driver
router.route("/adduser").post((req,res)=> {

    const name = req.body.name;
    const username = req.body.username;
    const email=req.body.email;
    const contactNumber=req.body.contactNumber;
    const  pwd=req.body.pwd;

    Register.findOne({email: email})
    .then((savedRegister) => {
        if(savedRegister) {
            return res.status(422).json({error:"user already exists with that email"})
        }

    const newRegister= new Register({ //new feedback object
    
        name,
        username,
        email,
        contactNumber,
        pwd
    })

    newRegister.save().then(()=>{
        //to be executed if successful
        res.json("user Added")

    }).catch((err)=>{ //execute if not successful
              console.log(err);
    })

})
})
 //view all the data from table by drivers
router.route("/readuser").get((req,res)=>{              
    Register.find().then(( Register)=>{
            res.json( Register)
      }) .catch((err)=>{
           console.log(err)
      })
   
 })

 //view all the data from table by admin
router.route("/readuadmin").get((req,res)=>{              
    Register.find().then(( Register)=>{
          res.json( Register)
    }) .catch((err)=>{
         console.log(err)
    })
 
})

 //view a specific feedback by id
 router.route("/getuser/:id").get(async(req,res)=> {
    

    let userId= req.params.id;
    const user= await  Register.findById(userId)
    .then(( Register) =>{
        res.status(200).send({ status : "user fetched", Register})

    }).catch(()=> {
        console.log(err.message);
        res.status(500).send({status: "Error with fetch user"});
    })
 })
    


//update a feedback
router.route("/updateuser/:id").put(async(req,res)=> {
       let userId= req.params.id; //passing id through url as a parameter
       const { name,username,email,contactNumber, pwd } =req.body; //destructure frontend variables passing to backend through a object

       const updateRegister= {       
        name,
        username,
        email,
        contactNumber,
        pwd,
         
       }

       const update = await Register.findByIdAndUpdate(userId, updateRegister).then(() =>{
        res.status(200).send({status: "User updated"})
       }).catch((err)=>{
           console.log(err);
           res.status(500).send({status: "Error with update data", error:err.message});
       })
        
})



//delete feedback
router.route("/deleteuser/:id").delete(async(req,res) =>{
       let userId=req.params.id;

       await  Register.findByIdAndDelete(userId).then(() =>{
        res.status(200).send({status: "User deleted"})
    }).catch((err)=>{
        console.log(err);
        res.status(500).send({status: "Error with delete user", error:err.message});
    })
       
})

//signin
router.route("/signin").post((req,res) => {
    {/*const email = req.body.email;
    const password     = req.body.password; */}
        const name      = req.body.name;
        const username = req.body.username;
        const email    = req.body.email;
        const contactNumber = req.body.contactNumber;
        const pwd   = req.body.pwd;
        
    
        const newRegister = new Register ({
            name,
            username,
            email, 
           contactNumber,
            pwd
             
    
        })
     if(!email || !pwd){
         res.status(422).json({error:"Please add email or password"})
     }
      Register.findOne({email:email})
      .then(savedRegister =>{
          if(!savedRegister){
             return  res.status(422).json({error:"Invalid Email or Password backend error"})
    
          }
    
          Register.findOne({pwd:pwd})
          .then(savedRegister =>{
            if(savedRegister){
                 {/* res.json({message:"successfully signed in"}) */}
    
                 res.json({message:"successfully signed in"});
                
                
              }
              else{
                  return res.status(422).json({error:"Invalid Email or Password"})
              }
          })
        .catch(err=>{
            console.log(err)
        })
    
      })
    })

module.exports = router;