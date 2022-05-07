import React ,{useState} from "react";
import axios from "axios";
import logo from "../assets/signup.png";
import{Form,Button,Container,Row} from "react-bootstrap";
 
import {Link,useNavigate} from 'react-router-dom'
//import { Button } from "react-bootstrap";
//import { Link } from "react-router-dom";
 
 
export default function AddUser(){  //adding function

 //creating states
  
 const navigate = useNavigate()

 const [name,setName] = useState("");
 const [username,setUsername] = useState("");
 const [email,setEmail] = useState("");
 const [contactNumber,setContactNumber] = useState("");
 const [pwd,setPwd] = useState("");


 function sendData(e){  //create event send data

  if(!name || !username || !email || !contactNumber || !pwd){
    alert("Fields can not be empty!");
    return
}
   else if(!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))){ //validate email address
     alert("Incorrect Email type");
     return
 }
 else if(contactNumber.trim().length !=10){
  alert("Invalid contact No!");
  return
}
   e.preventDefault(); //execute setData function, when click submit button

     const newUser ={
       
        name,
       username,
       email,
       contactNumber,
       pwd

     }

    axios.post(`http://localhost:8070/register/adduser`, newUser).then(() =>{  //route from the backend

      alert("Thanks for joining!") //display if adding is successful
       //navigate.push('/adduser')
       window.location = `/signin`; 
          
         }).catch((err) =>{   //display error if adding is not successful  
         alert("Duplicate email ")
    })

 }


 return(
   <div className="signup"> 
  <div className="container">
  <br></br>
        <blockquote class="blockquote"><center>
          <h1 class="mb-0"> GREAT TO SEE YOU HERE!</h1>
          <p class="blockquote-footer">Join with us...<cite title="Source Title"> </cite></p></center>
        </blockquote>
        
          
     <div> <br></br>  
        <table id="user"> 
            <tr> 
              <th> </th> <th></th>
              </tr>
       <tr><div>
       <div class="stopic"> <br></br> </div>
         <td>  
           <br></br> 
         <img src={logo} alt="logo" className="simage"/>   <br></br> <br></br> 
         <center> <h4 className="linkreg" >Already have an account?</h4> <a className="links2" href="/signin"> sign in</a>
         </center></td></div> 
       <td> 
           <form className="register-form" id="register-form" onSubmit={sendData}>
       
        <div className = "signup1">
            <div className= "signup2">
           
          
          <br></br><br></br>


           
            
          <Form.Group className="mb-3" controlId="formBasicName">
          <i className="zmdi zmdi-account zmdi-hc-lg"></i>
          <label for="name" className="labels"> Name </label>
                     <Form.Control type="text" placeholder="Andria pieris"  value = {name}
                        onChange={(e) => setName (e.target.value)} />
     
               </Form.Group>

               <Form.Group className="mb-3" controlId="formBasicUsername">
          <i className="zmdi zmdi-account zmdi-hc-lg"></i>
          <label for="username" className="labels"> Userame </label>
                     <Form.Control type="text" placeholder="Andrie24"  value = {username}
                        onChange={(e) => setUsername(e.target.value)} />
     
               </Form.Group>

               <Form.Group className="mb-3" controlId="formBasicEmail">
          <i className="zmdi zmdi-email zmdi-hc-lg"></i>
          <label for="email" className="labels"> Email address </label>
                     <Form.Control type="email"   aria-describedby="emailHelp" placeholder="andria@gmail.com"  value = {email}
                        onChange={(e) => setEmail(e.target.value)} />
     
                      <large id="emailHelp" >We'll never share your email with anyone else.</large>     
               </Form.Group>
    
  
               <Form.Group className="mb-3" controlId="formBasicContactNumber">
          <i className="zmdi zmdi-phone zmdi-hc-lg"></i>
          <label for="contactNumber" className="labels"> Contact Number </label>
                     <Form.Control type="text"   placeholder="0712345578"  value = {contactNumber}
                        onChange={(e) => setContactNumber(e.target.value)} />
     
               </Form.Group>
 
          
               <Form.Group className="mb-3" controlId="formBasicpwd">
          <i className="zmdi zmdi-lock zmdi-hc-lg"></i>
          <label for="pwd" className="labels"> Password </label>
                     <Form.Control type="password"   placeholder="andri@123"  value = {pwd}
                        onChange={(e) => setPwd(e.target.value)} />
                      <large id="pwdHelp" >Must contain atleast 8 characters.</large>
  
               </Form.Group>

   

   

   
  
  <a className="btn btn-light btn-lg" href="/adduser"> Cancel</a>
  <button type="submit" className="btn btn-primary  btn-lg"   >Sign up</button>
   
  </div></div></form></td></tr>
     
   </table>
  </div></div>
  <br></br><br></br><br></br>
  </div>
   
 );
}