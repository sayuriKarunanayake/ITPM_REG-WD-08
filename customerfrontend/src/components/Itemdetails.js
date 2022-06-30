import React, { useState, useEffect} from "react";
import axios from "axios";
import { Button} from "react-bootstrap";
import { useParams } from "react-router";

//get details of specific item
export default function Itemdetails(){
    const [itemcode , setItemcode] = useState("");
    const [category , setcategory] = useState("");
    const [itemname , setItemname] = useState("");
    const [itemprice , setItemprice] = useState("");
    const [itemdescription, setItemdescription] = useState("");
    

const formData = new FormData(); //create form data object
    formData.append("itemcode", itemcode);
    formData.append("category", category);
    formData.append("itemname", itemname); //use append method 
    formData.append("itemprice", itemprice);
    formData.append("itemdescription", itemdescription);
    
    


const {id} = useParams();
useEffect(() => {
    axios
    .get(`/items/${id}`)
    .then((res) => [
        setItemcode(res.data.itemcode),
        setcategory(res.data.category),
        setItemname(res.data.itemname),
        setItemprice(res.data.itemprice),
        setItemdescription(res.data.itemdescription)
        
    ])

.catch((err) => {
    alert(err);
 });
},[]);

   
    return(
        
      <div className ="container py-5">
      <h2>Our Products</h2>
    <div style ={{margineTop:'30px'}}>
        
           <h4>{itemname}</h4>
    <hr/>
    
     <dl className = "row">
        
           <dt className ="col-sm-3">Item Code</dt>
           <dd className ="col-sm-9">{itemcode}</dd>
<br></br>
           
           <dt className ="col-sm-3">Category</dt>
           <dd className ="col-sm-9">{category}</dd>

<br></br>
           <dt className ="col-sm-3">Item Price</dt>
           <dd className ="col-sm-9">{itemprice}</dd>
    
<br></br>
           <dt className ="col-sm-3">Item Description</dt>
           <dd className ="col-sm-9">{itemdescription}</dd>

<br></br>
            
    </dl>
    </div>
    <Button variant="btn btn-secondary"><a href = "/" style={{textDecoration:'none',color:'white'}}>Back</a> </Button>
    
    </div>
);
};


