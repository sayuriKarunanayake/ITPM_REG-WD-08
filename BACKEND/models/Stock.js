//model is a blueprint like a class
const mongoose = require('mongoose');//require is used to export
//template given as a document to store in mongo DB
const Schema = mongoose.Schema;//schema is the place where attributes stored
//object creation
const stockSchema = new Schema({
    //properties declare
    stockCode : {
        type : String,
        required : true,//backend validation
        unique: true

    },
    category : {
        type : String,
        required : true//backend validation

    },
    
    manufacturer : {
        type : String,
        required : true//backend validation

    },
    supplier : {
        type : String,
        required : true//backend validation

    },
    modelName : {
        type : String,
        required : true//backend validation

    },
    unitPrice : {
        type : Number,
        required : true//backend validation

    },
    specifications : {
        type : String,
        required : true//backend validation

    },
    receivedDate : {
        type : String,
        required : true//backend validation

    },
    qty : {
        type : Number,
        required : true//backend validation

    },
    status_avail : {
        type : String,
        required : true//backend validation

    },
   
})
//data coming from routes go to DB through models
//declare which schema goes to which table
const stock = mongoose.model("Stocks",stockSchema);//table name,schema created 
module.exports = stock;//export the module