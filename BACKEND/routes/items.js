//////write all http request for crud
const express = require("express");
const router =  express.Router();
const multer = require("multer")
const Items = require("../models/items");


const storage = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, "uploads/");
},
filename: (req, file, callback) => {
    callback(null, file.originalname); ///image saved name
}
})

//create upload variable and add storage const details
const upload = multer({storage:storage});

////request add new item

router.post("/items/add", upload.single("itemimage"),(req,res) => {
    const newItem = new Items({
        itemcode: req.body.itemcode,
        category: req.body.category,
        itemname: req.body.itemname,
        itemprice: req.body.itemprice,
        itemdescription: req.body.itemdescription,
        date: req.body.date,
        itemimage: req.file.originalname,
    });

console.log('destination: ', req.file.destination, ' filename: ', req.file.filename, ' path: ', req.file.path)

newItem
.save()
.then(() => res.json("New Item Posted!"))
.catch((err) => res.status(400).json(`Error: ${err}`));
});

////request get all items

router.get("/items",(req,res)=>{
    Items.find()
    .then((item)=> res.json(item))
    .catch((err) => res.status(400).json(`Error: ${err}`));
});


//get a specific Request
router.get("/items/:id", (req,res) => {
    Items.findById(req.params.id)
    .then((item) => res.json(item))
    .catch((err) => res.status(400).json(`Error: ${err}`)); 
});


////request update Item
router.put('/items/update/:id',upload.single("itemimage"), (req,res) => {
    Items.findById(req.params.id)
    .then((item) => {
        item.itemcode = req.body.itemcode;
        item.category = req.body.category;
        item.itemname = req.body.itemname;
        item.itemprice =  req.body.itemprice;
        item.itemdescription = req.body.itemdescription;
        item.date = req.body.date;
        item.itemimage =  req.file.originalname;

        item
        .save()
        .then(() => res.json("Item Updated Successfully!!"))
        .catch((err)=> res.status(400).json(`Error: ${err}`));

    })
    .catch((err)=> res.status(400).json(`Error: ${err}`));
});
 
      
//cancel item
router.delete('/items/:id',(req , res) => {
    Items.findByIdAndDelete(req.params.id)
    .then(() => res.json("Item is Deleted !!"))
    .catch((err)=> res.status(400).json(`Error: ${err}`));
});

module.exports = router;

