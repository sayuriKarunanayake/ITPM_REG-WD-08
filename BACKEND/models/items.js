const mongoose = require('mongoose');
//create an variable
const itemSchema = new mongoose.Schema({
//declare attributes

    itemcode:{
        type:String,
        require:true,
        unique:true
    },
    itemname:{
        type:String,
        require:true
    },
    itemprice:{
        type:String,
        require:true  
    },
    itemdescription:{
        type:String,
        require:true
    },
    itemimage:{
        type:String,
        require:true
    }
});


//export module
module.exports=mongoose.model('Items',itemSchema)
