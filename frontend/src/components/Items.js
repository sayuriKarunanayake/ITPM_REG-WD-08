import React, {useState} from 'react';
import axios from "axios";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const AllItems = () => {
const [items, setItems] = useState([]);

axios.get("/items")
.then((res) => {
    setItems (res.data); 
})
.catch((err) =>
console.log(err)
)

//Delete item by id
const deleteItem = (id) => {
    axios.delete(`/items/${id}`).then((response) => alert (response.data));
    
};

 
return(
    <div className="container">
        <div className= 'addcate'>
        <div className ="container py-5">
        <h1>All Items</h1>
        <table><tbody>
            {items.map((item ,key) => (

                <Card className="text-right"> 
                 <Card.Body>
                <tr><img src = {item.itemimage}/> 
                 <tr><label>{item.itemcode}</label></tr> 
                 <tr><label>{item.category}</label></tr>
                <tr><label>{item.itemname}</label></tr>
                <tr><label>{item.itemprice}</label></tr>
                <tr><label>{item.itemdescription}</label></tr>
                <tr><label>{item.date}</label></tr> 

                   
     <button className='btn btn-danger'  onClick={() => deleteItem(item._id)}>DELETE</button>&nbsp;&nbsp;
    <a className ="btn btn-warning" href={`/edititems/${item._id}`}>EDIT</a>
                </tr></Card.Body></Card>
            ))}
        </tbody>
        </table>
        <br></br>
        <Button variant="primary"><a href = "/itemandcategoryHome" style={{textDecoration:'none',color:'Black'}}>Back to Home</a></Button>&nbsp;&nbsp;
        
        <Button variant="primary"><a href = "/reportgene" style={{textDecoration:'none',color:'Black'}}>Generate Report</a></Button>
  </div> </div> </div>
)
}
export {
    AllItems
};

