const mongoose = require('mongoose'); //export
const Schema = mongoose.Schema; //store attributes in schema

const DeiverySchema =new Schema({ //create new object

     
  //properties

 
    username :{
        type: String, //data type
        required :false//validation
      
    },

    contactNumber:{
        type: String, //data type
        required :true, //validation
        maxlength: 20,
       
    },
 
    email :{
        type: String, //data type
        required :true//validation
         
    },
    homeno :{
        type: String, //data type
        required :true//validation
         
    },

    street :{
        type: String, //data type
        required :true //validation
       
    },

    city :{
        type: String, //data type
        required :true //validation
         
    },

    province :{
        type: String, //data type
        required :false //validation
          
    },
    
    deliveryTime :{
        type: String, //data type
        required :false //validation
         
    },
})

const Delivery = mongoose.model("delivery",DeiverySchema); //orderschema data goes to order tableO
module.exports = Delivery;