import React, {useState} from 'react';
import axios from "axios";
import {Col,Container,Row,Carousel,Button,Card,ListGroup,ListGroupItem} from 'react-bootstrap';
import App from '../App';
//import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse';


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
   
      <h1>Welcome to Royal Life Style Store</h1>
      <p>If you are boring! Go Shopping.</p>
    
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={1000}>
    <img
      className="d-block w-100"
      src="https://res.cloudinary.com/hidl3r/image/upload/v1652000332/Lifestyle/Kitchen_Tools_HERO_o9e0uk.jpg"
      alt="Third slide"
    />

    <Carousel.Caption >
    
      <h1>Welcome to Royal Life Style Store</h1>
      <p>If you are boring! Go Shopping.</p>
     
    </Carousel.Caption>
  </Carousel.Item>

</Carousel>
    </Col>
  </Row>

  <br></br>
  
    <div class="banner">
     <centre> <h3>Kitchen Tools</h3> </centre>  
    </div>
      <br></br>
    <div class="banner2">
      <centre> <h3>Electric Items</h3> </centre>  
    </div>                                                            
      <br></br>
    <div class="banner3">
      <centre> <h3>Furnitures</h3> </centre>  
    </div>

  <Row>
    <Col>
    
    <center><h1>Our Products</h1></center>
    
    {items.map((item ,key) => (
      
        <Card style={{ width: '300px', float:'left' ,padding:'30px'}}>
          <div className='hocard'>
        <Card.Img variant="top" src={item.itemimage} />
        <Card.Body>
          <Card.Title>{item.itemname}</Card.Title>
        
          <ListGroup className="list-group-flush">
          <ListGroupItem>{item.itemcode}</ListGroupItem>
          <ListGroupItem>{item.category}</ListGroupItem>
          <ListGroupItem>{item.itemprice}</ListGroupItem>
          <ListGroupItem>{item.itemdescription}</ListGroupItem>
         </ListGroup>

          <Button variant="primary"><a href = "/addorder" style={{textDecoration:'none',color:'white'}}>Buy Now</a></Button>
          
        </Card.Body>
       </div>
      </Card>   
    ))}
 <br></br>        
</Col>
</Row>

</Container>
   
)
}
export default Home;