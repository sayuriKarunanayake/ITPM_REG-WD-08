const router = require("express").Router();
let Staff = require("../models/Staff");

//add route
router.route("/add").post((req,res)=>{
    const staffID = req.body.staffID;
    const title = req.body.title;
    const first_name = req.body.first_name;
    const last_name = req.body.last_name;
    const nic = req.body.nic;
    const phoneNo = Number(req.body.phoneNo);
    const email = req.body.email;
    const password = req.body.password;
    const regDate = req.body.regDate;

    //create obj.
    const newStaff = new Staff({
        staffID,
        title,
        first_name,
        last_name,
        nic,
        phoneNo,
        email,
        password,
        regDate
    })

    newStaff.save().then(()=>{
        res.json("New Staff Member Added")
    }).catch((err)=>{
        console.log(err);
        res.status(401).send({message:'Staff ID already exist!'});
    })
})

//get all details to frontend route
router.route("/").get((req,res)=>{
    Staff.find().then((staffs)=>{
        res.json(staffs)
    }).catch((err)=>{
        console.log(err);
    })

})

//update route
router.route("/update/:staffID").put(async(req,res)=>{
    let userId = req.params.staffID;//id comes as a url parameter
    //destructure-frontend variables pass to backend as a object
    const { title,
        first_name,
        last_name,
        nic,
        phoneNo,
        email,
        password } = req.body;

    const updateStaff = {
        title,
        first_name,
        last_name,
        nic,
        phoneNo,
        email,
        password   
    }
    const update = await Staff.findOneAndUpdate({staffID:userId},updateStaff)
    .then(()=>{
        res.status(200).send({status:"Details updated"})
    }).catch((err)=>{
        console.log(err);
        res.status(500).send({status:"Error updating details", error:err.message});
    })
    
})

//delete route
router.route("/delete/:staffID").delete(async(req,res)=>{
    let userId = req.params.staffID;
    await Staff.findOneAndDelete({staffID:userId}).then(()=>{
        res.status(200).send({status:"User deleted"});
    }).catch((err)=>{
        console.log(err.message);
        res.status(500).send({status:"Error with deletion", error:err.message});
    })
})

//get data of one 
router.route("/get/:staffID").get(async(req,res)=>{
    let userId = req.params.staffID;
    const user = await Staff.findOne({staffID:userId}).then((staff)=>{
        res.status(200).send({status:"User fetched", staff});
    }).catch((err)=>{
        console.log(err.message);
        res.status(500).send({status:"Error with fetching user", error:err.message});
    })
})

module.exports = router;