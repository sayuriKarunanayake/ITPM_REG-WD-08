import React, { useState, useEffect} from "react";
import axios from "axios";
import { Button,Card} from "react-bootstrap";
import { useParams } from "react-router";


export default function EditItems(){
    const [itemcode , setItemcode] = useState("");
    const [category , setcategory] = useState("");
    const [itemname , setItemname] = useState("");
    const [itemprice , setItemprice] = useState("");
    const [itemdescription, setItemdescription] = useState("");
    const [date , setDate] = useState("");
    const [message , setMessage] = useState("");
    const [fileName, setFileName] = useState("");

    //add new image
    const onChangeFile = (e) => {
        setFileName(e.target.files[0]);
    };

    //onclick method
    const changeOnClick = (e) => {
        e.preventDefault();

const formData = new FormData(); //create form data object
    formData.append("itemcode", itemcode);
    formData.append("category", category);
    formData.append("itemname", itemname); //use append method 
    formData.append("itemprice", itemprice);
    formData.append("itemdescription", itemdescription);
    formData.append("date", date);
    formData.append("itemimage", fileName);

axios
.put(`/items/update/${id}`,formData)
.then(() =>{
    alert("Item Details Updated Successfully!"); //display successful messsage or error when update
    window.location= `/allitems`;
})
.catch((err) => {
       console.log(err);
       alert(err);
    });
};

const {id} = useParams();
useEffect(() => {
    axios
    .get(`/items/${id}`)
    .then((res) => [
        setItemcode(res.data.itemcode),
        setcategory(res.data.category),
        setItemname(res.data.itemname),
        setItemprice(res.data.itemprice),
        setItemdescription(res.data.itemdescription),
        setDate(res.data.date),
        setFileName(res.data.itemimage),
    ])

.catch((err) => {
    alert(err);
 });
},[]);


return(
<Card className="text-left"> 
        <div className ="addcate">
        <div className ="container py-5">
            
        <Card.Header><h4>Edit Items</h4></Card.Header><br></br>
        <span className="message">{message}</span>
        <Card.Body>
        
        <form onSubmit={changeOnClick} encType="multipart/form-data">
        <Card.Text>
            <div className = "form-group" style={{marginBottom:'15px'}}> 
                <label htmlFor = "itemcode">Item Code</label>
                <input
                type = "text"
                value = {itemcode} disabled="disabled"
                onChange = {(e) => setItemcode(e.target.value)}
                className="form-control"
                placeholder="Enter Item Code" /></div>
    
            <div className= "form-group">
                    <label for="category" className="form-label" >Item Category</label>
                    <input type = "text" className="form-control form-controlEmp" id="category" 
                    value={category} disabled="disabled"/>
                </div>

            <div className = "form-group" style={{marginBottom:'15px'}}> 
                <label htmlFor = "itemname">Item Name</label>
                <input
                type = "text"
                value = {itemname}
                onChange = {(e) => setItemname(e.target.value)}
                className="form-control"
                placeholder="Enter Item Name" /></div>

            <div className = "form-group" style={{marginBottom:'15px'}}> 
                <label htmlfor = "itemprice">Item Price</label>
                <input
                type = "text"
                value = {itemprice}
                onChange = {(e) => setItemprice(e.target.value)}
                className="form-control" required
                placeholder="Enter Item Price" /></div>

            <div className = "form-group" style={{marginBottom:'15px'}}> 
                <label htmlFor = "itemdescription">Item Description</label>
                <textarea
                value = {itemdescription}
                onChange = {(e) => setItemdescription(e.target.value)}
                className="form-control" required
                rows = "4"
                placeholder="Enter Item Description" /></div>

            <div className = "form-group" style={{marginBottom:'15px'}}> 
                <label htmlFor = "date">Date</label>
                <input
                type = "date"
                value = {date}
                onChange = {(e) => setDate(e.target.value)}
                className="form-control" required
                placeholder="Enter Date" /></div>

            <div className = "form-group" style={{marginBottom:'15px'}}> 
                <label htmlFor = "file">Choose Item Image</label><br></br>
                <input type = "file" name="itemimage" 
                className="form-control-file"
                onChange = {onChangeFile}/>
                </div><br></br>

<Button type="submit" className=" btn btn-warning"> Update Item </Button> &nbsp;
<Button variant="btn btn-secondary"><a href = "/itemandcategoryHome" style={{textDecoration:'none',color:'white'}}>Back to Home</a> </Button> &nbsp;
</Card.Text>
        </form>
        <br></br>
    </Card.Body></div></div></Card>
);
};


