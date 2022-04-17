const router = require("express").Router();
let Stock = require("../models/Stock");

//add route
router.route("/add").post((req,res)=>{
    const stockCode = req.body.stockCode;
    const category = req.body.category;
    const manufacturer = req.body.manufacturer;
    const supplier = req.body.supplier;
    const modelName = req.body.modelName;
    const unitPrice = Number(req.body.unitPrice);
    const specifications = req.body.specifications;
    const receivedDate = req.body.receivedDate;
    const qty = Number(req.body.qty);
    const status_avail = req.body.status_avail;

    const newStock = new Stock({
        stockCode,
        category,
        manufacturer,
        supplier,
        modelName,
        unitPrice,
        specifications,
        receivedDate,
        qty,
        status_avail
    })

    newStock.save().then(()=>{
        res.json("New Stock Added")
    }).catch((err)=>{
        console.log(err);
        res.status(401).send({message:'Stock code already exist!'});
    })
})

//get all details to frontend route
router.route("/getallstock").get((req,res)=>{
    Stock.find().then((staff)=>{
        res.json(staff)
    }).catch((err)=>{
        console.log(err);
    })

})

//update route
router.route("/update/:stockCode").put(async(req,res)=>{
    let userId = req.params.stockCode;//id comes as a url parameter
    //destructure-frontend variables pass to backend as a object
    const {

        qty,
        status_avail} = req.body;

    const updateEmployee = {
        
        qty,
        status_avail
    }
    const update = await Stock.findOneAndUpdate({stockCode:userId},updateEmployee)
    .then(()=>{
        res.status(200).send({status:"Stock updated"})
    }).catch((err)=>{
        console.log(err);
        res.status(500).send({status:"Error with updating data", error:err.message});
    })
    
})

//delete route
router.route("/delete/:stockCode").delete(async(req,res)=>{
    let userId = req.params.stockCode;
    await Stock.findOneAndDelete({stockCode:userId}).then(()=>{
        res.status(200).send({status:"Stock deleted"});
    }).catch((err)=>{
        console.log(err.message);
        res.status(500).send({status:"Error with deletion", error:err.message});
    })
})

//get data of one stock
router.route("/get/:stockCode").get(async(req,res)=>{
    let userId = req.params.stockCode;
    const user = await Stock.findOne({stockCode:userId}).then((stock)=>{
        res.status(200).send({status:"Data of stock fetched", stock});
    }).catch((err)=>{
        console.log(err.message);
        res.status(500).send({status:"Error with fetching stock data", error:err.message});
    })
})

module.exports = router;