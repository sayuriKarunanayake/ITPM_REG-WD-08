import React, {useState} from "react";
import axios from "axios";
import {Button,Card} from 'react-bootstrap';

const AddItem = () => {
    const [itemcode , setItemcode] = useState("");
    const [category,setcategory] = useState("");
    const [itemname , setItemname] = useState("");
    const [itemprice , setItemprice] = useState("");
    const [itemdescription, setItemdescription] = useState("");
    const [message , setMessage] = useState("");
    const [date,setDate] = useState("");
    const [fileName, setFileName] = useState("");

    //add image
    const onChangeFile = (e) => {
        setFileName(e.target.files[0]);
    };

    //change on click method
    const changeOnClick = (e) => {
        e.preventDefault();
    
const formData = new FormData(); //create form data object
    formData.append("itemcode", itemcode);
    formData.append("category", category);
    formData.append("itemname", itemname); //use append method 
    formData.append("itemprice", itemprice);
    formData.append("itemdescription", itemdescription);
    formData.append("date",  date);
    formData.append("itemimage", fileName);

    setItemcode("");
    setcategory("");
    setItemname("");
    setItemprice("");
    setDate("");
    setItemdescription("");

    //items add
    axios.post("/items/add",formData).then((res) => {
        alert("Item added sucessfully");
        window.location(`/allitem`)
    })
    .catch((err) => {
       console.log(err);
    });
};

return (

    <Card className="text-left"> 
        <div className ="addcate">
        <div className ="container py-5">
            
        <Card.Header><h4>Add New Items</h4></Card.Header><br></br>
        <span className="message">{message}</span>
        <Card.Body>
        
        <form onSubmit={changeOnClick} encType="multipart/form-data" >
        <Card.Text>
            <div className = "form-group" style={{marginBottom:'15px'}} id="itemcode"> 
                <label htmlFor = "itemcode">Item Code</label>
                <input
                type = "text"
                value = {itemcode} required
                onChange = {(e) => setItemcode(e.target.value)}
                className="form-control"
                placeholder="Enter Item Code" /></div>

            <div className= "form-group">
                    <label for="category" className="form-label">Item Category</label>
                    <select className="form-select form-control" id="category" 
                    onChange={(e)=>{setcategory(e.target.value);//updating state using value taken from the form 
                    }}required>
                        <option value="" disabled selected>Select</option>
                        <option value="Electric Items">Electric Items</option>
                        <option value="Kitchen tools">Kitchen tools</option>
                        <option value="Furniture">Furniture</option>
                    </select>
                    </div>

            <div className = "form-group" style={{marginBottom:'15px'}} id="itemname"> 
                <label htmlFor = "itemname">Item Name</label>
                <input
                type = "text"
                value = {itemname} required
                onChange = {(e) => setItemname(e.target.value)}
                className="form-control"
                placeholder="Enter Item Name" /></div>

            <div className = "form-group" style={{marginBottom:'15px'}} id="itemprice"> 
                <label htmlfor = "itemprice">Item Price</label>
                <input
                type = "text"
                value = {itemprice} required
                onChange = {(e) => setItemprice(e.target.value)}
                className="form-control"
                placeholder="Enter Item Price" /></div>

            <div className = "form-group" style={{marginBottom:'15px'}}  id="itemdescription"> 
                <label htmlFor = "itemdescription">Item Description</label>
                <textarea
                value = {itemdescription} required
                onChange = {(e) => setItemdescription(e.target.value)}
                className="form-control"
                rows = "3"
                placeholder="Enter Item Description" /></div>

            <div className = "form-group" style={{marginBottom:'15px'}}  id="date"> 
                <label htmlFor = "date">Date</label>
                <input
                value ={date}
                type = "date" required
                onChange = {(e) => setDate(e.target.value)}
                className="form-control"
                placeholder="Enter Date" /></div>

            <div className = "form-group" style={{marginBottom:'15px'}}> 
                <label htmlFor = "file">Choose Item Image</label><br></br>
                <input type = "file" name="itemimage" 
                className="form-control-file" required
                onChange = {onChangeFile}/>
                </div><br></br>

<Button type="submit" className=" btn btn-success"> Add Item </Button> &nbsp;
<Button variant=" btn btn-secondary"><a href = "/allitems" style={{textDecoration:'none',color:'white'}}>Cancel</a></Button>
</Card.Text>
        </form>
        <br></br>
    </Card.Body></div></div></Card>
   
);
}
export default AddItem;