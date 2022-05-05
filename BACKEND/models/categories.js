const mongoose = require('mongoose');
//create an variable
const categorySchema = new mongoose.Schema({
//declare attributes
    categoryname:{
        type:String,
        require:true
    
    }
    
});


//export module
module.exports=mongoose.model('Categories',categorySchema)
