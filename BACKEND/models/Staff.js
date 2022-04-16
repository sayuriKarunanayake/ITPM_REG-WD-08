//model is a blueprint like a class
const mongoose = require('mongoose');//require is used to export
//template given as a document to store in mongo DB
const Schema = mongoose.Schema;//schema is the place where attributes stored
//object creation
const staffSchema = new Schema({
    //properties declare
    staffID : {
        type : String,
        required : true,//backend validation
        unique: true

    },

    title:{
        type : String,
        required : true
    },
    
    first_name : {
        type : String,
        required : true//backend validation

    },
    
    last_name : {
        type : String,
        required : true//backend validation

    },
    
    nic : {
        type : String,
        required : true//backend validation
    },

    phoneNo : {
        type : Number,
        required : true//backend validation

    },
    email : {
        type : String,
        required : true//backend validation

    },

    password :{
        type : String,
        required : true
    },

    regDate :{
        type : String,
        required : true
    },
})
//data coming from routes go to DB through models
//declare which schema goes to which table
const staff = mongoose.model("Staff",staffSchema);//table name,schema created 
module.exports = staff;//export the module