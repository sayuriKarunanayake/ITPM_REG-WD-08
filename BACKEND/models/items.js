const mongoose = require("mongoose");
//create an variable
const Schema = mongoose.Schema;
//declare attributes

const itemSchema = new Schema ({

    itemcode:{
        type:String,
        required:true,
        unique:true
    },
    category:{
        type:String,
        required:true
    },
    itemname:{
        type:String,
        required:true
    },
    itemprice:{
        type:String,
        required:true  
    },
    itemdescription:{
        type:String,
        required:true
    },
    date:{
        type:String,
        required:true
    },
    itemimage:{
        type:String,
        
    }
});

const Items = mongoose.model("Item", itemSchema);

//export module
module.exports=Items;
