import React, {useState} from 'react';
import axios from "axios";
import {Col,Container,Row,Button,Card,ListGroup,ListGroupItem} from 'react-bootstrap';
import  './App.css';

const AllItems = () => {
const [items, setItems] = useState([]);

//get items from axios
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
    
    <div className='addcate'>
        <Container>
        <Row>
            <Col>
                <center><h1>All Items</h1></center>
                {items.map((item ,key) => (

            <Card style={{ width: '300px', float:'left',padding:'40px'}}>
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
    <a className ="btn btn-warning" href={`/edititems/${item._id}`}>EDIT</a>

            </Card.Body>
            </div>
            </Card>
            ))}

        <br></br>
        <Button variant="secondary"><a href = "/itemandcategoryHome" style={{textDecoration:'none',color:'Black'}}>Back to Home</a></Button>&nbsp;&nbsp;
        
        <Button variant="primary"><a href = "/reportgene" style={{textDecoration:'none',color:'Black'}}>Generate Report</a></Button>
  
</Col>
</Row></Container></div>
)}
export {
    AllItems
};

