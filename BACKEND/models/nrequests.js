const mongoose = require('mongoose');
//create an variable
const nrequestSchema = new mongoose.Schema({
//declare attributes
    
    email:{
            type:String,
            require:true
    },
    
    newproductrequest:{
        type:String,
        require:true
}
});


//export module
module.exports=mongoose.model('Nrequests',nrequestSchema)
