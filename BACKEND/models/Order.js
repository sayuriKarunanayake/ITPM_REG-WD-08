const mongoose = require('mongoose'); //export
const Schema = mongoose.Schema; //store attributes in schema

const orderSchema =new Schema({ //create new object

     
  //properties


   itemName :{
    type: String, //data type
    required :true //validation
   },

   itemCode :{
    type: String, //data type
    required :true,
     //validation
   },

   itemColour :{
       type:String
   },

   username :{
    type:String
},

})

const Order = mongoose.model("order",orderSchema); //orderschema data goes to order tableO
module.exports = Order;