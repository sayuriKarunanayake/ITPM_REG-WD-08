import React, {useState} from 'react';
import axios from "axios";
import {Col,Row,Button,Card,ListGroup,ListGroupItem} from 'react-bootstrap';
//import  './App.css';

const AllItems = () => {
const [items, setItems] = useState([]);

//get items
axios.get("/items")
.then((res) => {
    setItems (res.data); 
})
.catch((err) =>
console.log(err)
)

//Delete item by id
const deleteItem = (id) => {
    axios.delete(`/items/${id}`).then((response) => alert (response.data)); //alert
    
};

 
return(
    <div className='addcate'>
    
    <Row>
        <Col>
            <center><h1>All Items</h1></center>
            {items.map((item ,key) => (

        <Card style={{ width: '300px', float:'left',padding:'20px', marginLeft:'10px'}}>
        <div className='hocard'>
            <Card.Img variant="top" src = {item.itemimage}/> 
            <Card.Body>
                <Card.Title>{item.itemname}</Card.Title>
                <ListGroup className="list-group-flush">
                <ListGroupItem>{item.itemcode}</ListGroupItem>
                <ListGroupItem>{item.category}</ListGroupItem>
                <ListGroupItem>{item.itemprice}</ListGroupItem>
                <ListGroupItem>{item.itemdescription}</ListGroupItem>
                <ListGroupItem>{item.date}</ListGroupItem> 
        </ListGroup>
               
        <button className='btn btn-danger'  onClick={() => deleteItem(item._id)}>DELETE</button>&nbsp;&nbsp;
        <button className='btn btn-warning'><a className ="nounderline"  href={`/edititems/${item._id}`} style={{color:'white'}}>EDIT</a></button>

        </Card.Body>
        </div>
        </Card>
        ))}
        <br></br>
        
        <Button variant="primary"><a href = "/itemandcategoryHome" style={{textDecoration:'none',color:'Black'}}>Back to Home</a></Button>&nbsp;
        <Button variant="info"><a href = "/reportgene" style={{textDecoration:'none',color:'Black'}}>Generate Report</a></Button>
  
</Col>
</Row></div>
)}

export {
    AllItems
};

