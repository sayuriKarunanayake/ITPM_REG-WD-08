//model is a blueprint like a class
const mongoose = require('mongoose');//require is used to export
//template given as a document to store in mongo DB
const Schema = mongoose.Schema;//schema is the place where attributes stored
//object creation
const cuspaymentSchema = new Schema({
    //properties declare
    cardType : {
        type : String,
        required : true//backend validation

    },
    
    nameOncard : {
        type : String,
        required : true//backend validation

    },
    cardNo : {
        type : String,
        required : true//backend validation

    },
    expdate : {
        type : String,
        required : true//backend validation

    },
    cvv : {
        type : String,
        required : true//backend validation

    },
    payamount : {
        type : String,
        required : true//backend validation

    },
    paymentDate : {
        type : String,
        required : true//backend validation

    },
})
//data coming from routes go to DB through models
//declare which schema goes to which table
const cuspayment = mongoose.model("customerPayment",cuspaymentSchema);//table name,schema created 
module.exports = cuspayment;//export the module