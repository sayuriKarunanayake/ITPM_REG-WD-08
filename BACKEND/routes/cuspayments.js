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


module.exports = router;