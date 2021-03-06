const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
const app = express();
require("dotenv").config();

const PORT = process.env.PORT || 8070;

app.use(cors());
app.use(bodyParser.json());

app.use(express.static("uploads"));

const URL = process.env.MONGODB_URL;

mongoose.connect(URL, {
   
    useNewUrlParser:true,
    useUnifiedTopology:true
   
});

const connection = mongoose.connection;
connection.once("open", () => {
    console.log("MongoDB connection success!");
})


//give access to route file

//IT20197032
const staffRouter = require("./routes/staffs.js");
app.use("/staff", staffRouter);//1st parameter is the url name to call js file

const stockRouter = require("./routes/stocks.js");
app.use("/stock", stockRouter);//1st parameter is the url name to call js file

const cuspaymentRouter = require("./routes/cuspayments.js");
app.use("/cuspayment", cuspaymentRouter);//1st parameter is the url name to call js file


//IT20198954
const registerRouter =require("./routes/Register.js"); //import  register routes
app.use("/register",registerRouter); //create register routes

const feedbackRouter =require("./routes/Feedback.js"); //import  feedback routes
app.use("/feedback",feedbackRouter); //create feedback routes

const orderRouter =require("./routes/Order.js"); //import  order routes
app.use("/order",orderRouter); //create order routes

const deliveryRouter =require("./routes/Delivery.js"); //import  Delivery routes
app.use("/delivery",deliveryRouter); //create Deliveryroutes


//IT20192532
//import routes
const categoryRoutes = require("./routes/categories");
const nrequestRoutes = require("./routes/nrequests");
const itemRoutes = require("./routes/items");
//route middleware
app.use(categoryRoutes);
app.use(nrequestRoutes);
app.use(itemRoutes);

//Sanjaya
const postRoutesSupplier_Registration = require('./routes/Supplier_Registration');
const postRoutesPayment_Details = require('./routes/Payment_Details');
const postRoutesSupplier_Payment = require('./routes/Supplier_Payment');

app.use(postRoutesSupplier_Registration);
app.use(postRoutesPayment_Details);
app.use(postRoutesSupplier_Payment);



app.listen(PORT, () => {
    console.log(`Server up and running on port ${PORT}`)
})


