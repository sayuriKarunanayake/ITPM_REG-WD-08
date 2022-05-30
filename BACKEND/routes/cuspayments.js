const router = require("express").Router();
let CusPayment = require("../models/cuspayment");

    //add customer payment
    router.route("/insert").post((req,res)=>{
    const cardType = req.body.cardType;
    const nameOncard = req.body.nameOncard;
    const cardNo = req.body.cardNo;
    const expdate =req.body.expdate;
    const cvv = req.body.cvv;
    const payamount = req.body.payamount;
    const paymentDate = req.body.paymentDate;

    const newpayment = new CusPayment({
        cardType,
        nameOncard,
        cardNo,
        expdate,
        cvv,
        payamount,
        paymentDate
    })

    newpayment.save().then(()=>{
        res.json("New Payment Added")
    }).catch((err)=>{
        console.log(err);
        res.status(401).send({message:'Error occured when adding payment'});
    })

    })

    //read all customer payments
    router.route("/getallcuspayment").get((req,res)=>{
        CusPayment.find().then((payment)=>{
            res.json(payment)
        }).catch((err)=>{
            console.log(err);
        })

    })

    //delete route
    router.route("/delete/:id").delete(async(req,res)=>{
        let payid = req.params.id;

        await CusPayment.findByIdAndDelete(payid).then(()=>{
            res.status(200).send({status:"Payment details deleted"});
        }).catch((err)=>{
            console.log(err.message);
            res.status(500).send({status:"Error occured while deleting", error:err.message});
        })
    })

module.exports = router;