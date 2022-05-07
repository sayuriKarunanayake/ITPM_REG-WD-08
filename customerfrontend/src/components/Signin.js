import React from "react";
import {Link,useNavigate} from  'react-router-dom'
import { useState} from 'react';
import axois from "axios";
import {Col,Image,Form,Button,Container,Row} from "react-bootstrap";
import logo from "../assets/imgl.jpg";

const Signin = (props) =>{

    const navigate = useNavigate()
   
    const [email,setEmail] = useState("")
    const [pwd, setPwd] = useState("")
    const [username] = useState("")
    const [name] = useState("") 
    const [contactNumber] = useState("")
    
    function sendData(e) {
         if(!email || !pwd){
                alert("Please add both email and password");
                return
         }
        else if(!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)){
                alert("Invalid email");
             return
         }

        e.preventDefault();
        
        const newRegister ={
            name,
            username,
            email,
            contactNumber,
            pwd
        }
         console.log(newRegister)  
           // alert("Success");

         axois.post(`http://localhost:8070/register/signin`, newRegister).then(() => {
             alert("Sign in successfully!")

             window.location = `/addf`; 
             //window.location='/profile/+{email}'

         }).catch((err) =>{
             
            alert("Invalid email or password!")
         })
        
    }
     return(
       <div><center> <br/><br/><br/><br/>
           <Container>
  <Row>
    <Col>  <Form className="signinform" onSubmit={sendData} >
         <div className = "signin2">
           <div className= "signins">
         <Col xs={1} md={12}  > 
         <img src={logo} alt="logo" className="loginimage"/> 
           </Col>
           
               <h1 className="login">Sign In</h1>
                
               <br/> <br/> 
                
               <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control type="email" placeholder="Enter email"  value = {email}
                       onChange={(e) => setEmail(e.target.value)} />
    
                    </Form.Group>
        
              <Form.Group className="mb-3" controlId="formBasicPwd">
              <Form.Control type="password" placeholder="Password" value = {pwd}
                 onChange={(e) => setPwd(e.target.value)}/>
              </Form.Group>

              
              
      <Button variant="primary" size="lg" type="submit">
          Sign In
     </Button>
      <br/>
      <br/>
      <br/>
      <h5>
      <Link to = "/adduser" id="link"> Don't have an account? </Link>
     </h5>

              </div>
          </div>
        </Form></Col>
    <Col> 
    <br/><br/><br/><br/><br/>
     
    </Col>
  </Row>
  
</Container>
</center> 
<br/><br/><br/><br/><br/><br/>
     </div>
  )  
}

export default Signin
