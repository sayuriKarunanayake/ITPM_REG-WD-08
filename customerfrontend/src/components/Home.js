import React, {useState} from 'react';
import axios from "axios";
import {Col,Container,Row,Carousel,Button,Card,ListGroup,ListGroupItem} from 'react-bootstrap';
import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse';

const Home = () => {
const [items, setItems] = useState([]);

axios.get("/items")
.then((res) => {
    setItems (res.data); 
})
.catch((err) =>
console.log(err)
)

return(
    <Container>
  <Row>
    <Col>
    
    <Carousel fade>
  
  <Carousel.Item interval={1000}>
    <img
      className="d-block w-100"
      src="https://res.cloudinary.com/hidl3r/image/upload/v1652000439/Lifestyle/istockphoto-1293762741-170667a_zhprq2.jpg"
      alt="First slide"
    />

    <Carousel.Caption >
   
      <h3>Welcome to Royal Life Style Store</h3>
    
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={1000}>
    <img
      className="d-block w-100"
      src="https://res.cloudinary.com/hidl3r/image/upload/v1652000332/Lifestyle/Kitchen_Tools_HERO_o9e0uk.jpg"
      alt="Third slide"
    />

    <Carousel.Caption >
    
      <h3>Welcome to Royal Life Style Store</h3>
     
    </Carousel.Caption>
  </Carousel.Item>

</Carousel>
    
    
    
    </Col>
    
  </Row>
  <Row>
    <Col>
    
    
         <div>
        <div className ="container py-5">
      <centre><h1>Our Products</h1></centre>
       
            {items.map((item ,key) => (

                <Card style={{ width: '300px', float: 'left', padding:'40px' }}>
                <Card.Img variant="" src={item.itemimage} />
                <Card.Body>
                  <Card.Title>{item.itemname}</Card.Title>
                
                  <ListGroup className="list-group-flush">
        <ListGroupItem>{item.itemcode}</ListGroupItem>
        <ListGroupItem>{item.category}</ListGroupItem>
        <ListGroupItem>{item.itemprice}</ListGroupItem>
        <ListGroupItem>{item.itemdescription}</ListGroupItem>
  </ListGroup>
                  <Button variant="primary">Buy Now<a href = "/addorder" style={{textDecoration:'none',color:'white'}}></a></Button>
                </Card.Body>
              
              </Card>
              
            
            ))}
         
        <br></br>
       
  </div> </div> 

    </Col>
  
  </Row>
</Container>
   
)
}
export default Home;