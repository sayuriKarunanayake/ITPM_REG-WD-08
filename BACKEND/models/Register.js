const mongoose = require('mongoose'); //export
const Schema = mongoose.Schema; //store attributes in schema

const registerSchema = new Schema({ //create new object

     
  //properties

   name :{
    type: String, //data type
    required :true //validation
   },
    username :{
        type: String, //data type
        required :true, //validation
        unique: true
    },

    email :{
        type: String, //data type
        required :true //validation
    },

    

    contactNumber :{
        type: String, //data type
        required :false,//validation
        maxlength: 12 
    },

    pwd:{
        type: String, //data type
        required :true, //validation
        maxlength: 20,
        minlength: 8
    },
 
    
})

const Register = mongoose.model("register",registerSchema); //feedback schema data goes to feedback table

module.exports = Register;