import React ,{useState, useEffect} from "react";
import axios from "axios";
import {AppBar, Toolbar, Typography,Tab, Tabs} from "@mui/material"
import { Form, Button,Navbar,Nav,NavDropdown} from "react-bootstrap";
import { NavLink } from 'react-router-dom';
 

export default function AddDelivery(){  //adding function

    //creating states
  
  const [username,setUsername] = useState("");
  const [contactNumber,setContactNumber] = useState("");
  const [email,setEmail] = useState("");
  const [homeno,setHomeno] = useState("");
  const [street,setStreet] = useState("");
  const [city,setCity] = useState("");
  const [province,setProvince] = useState("");
  const [deliveryTime,setDeliveryTime] = useState("");

  const [value, setValue] =useState(  );
  
    
  function sendData(e){  //create event send data

    if(  !username || !homeno || !street || !city || !contactNumber ){
      alert("Fields can't be empty!");
      window.location = `/adddelivery`;
      return
  }

    else if(!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))){
      alert("Invalid Email type");
      return
  }

     else if(contactNumber.trim().length !=10){
        alert("Invalid contact No!");
        return
  }
   
    e.preventDefault(); //execute setData function, when click submit button

      const newDelivery ={
        
        username,
        contactNumber,
        email,
        homeno,
        street,
        city,
        province,
        deliveryTime

      }

     axios.post(`http://localhost:8070/delivery/adddelivery`, newDelivery).then(() =>{  //route from the backend

        alert("Delivery details Added.**To change delivery details please contact royallifestyle12@gmail.com**") //display if adding is successful
        window.location = `/addcuspay`;   //redirect to adding page
     }).catch((err) =>{   //display error if adding is not successful
        alert(err)
     })
  }

    return(
 
     <div className="addorder"> 
       <br></br>
       <blockquote class="blockquote"><center>
  <h1 class="mb-0">Order now</h1>
  < p class="blockquote-footer">Make your loved ones happy....<cite title="Source Title"> </cite> </p>
</center></blockquote>
       <br></br>

       <Navbar > 
          <Toolbar>
        
     
       <Tabs sx={{ml:"auto"}}   value={value} onChange={(e,val)=>setValue(val)} >
            <div><a href="/addorder"><img style={{height: 70, width: 90, marginLeft:252}}   src="https://cdn-icons.flaticon.com/png/512/5530/premium/5530730.png?token=exp=1651859283~hmac=1bb023322b08cf0c8350aefe185b76c3"  ></img></a>
             STEP 1   </div> 
              </Tabs>
                  
              <Tabs sx={{ml:"auto"}}   value={value} onChange={(e,val)=>setValue(val)} >
            <div><a href="/adddelivery"><img style={{height: 70, width: 90, marginLeft:432}}   src=" https://cdn-icons.flaticon.com/png/512/5530/premium/5530389.png?token=exp=1651864012~hmac=295680c67c0ec6b2f220042cf7cdc243"  ></img></a>
             NOW  STEP 2
            </div> 
              </Tabs>  

              <Tabs sx={{ml:"auto"}}   value={value} onChange={(e,val)=>setValue(val)} >
            <div><a href="/addcuspay"><img style={{height: 70, width: 90, marginLeft:432}}   src="https://cdn-icons-png.flaticon.com/512/4108/4108042.png"  ></img></a>
             NEXT STEP 3
            </div> 
              </Tabs>

               

              </Toolbar>
            </Navbar> 

       <table className="ftable"><tr><th> 

      

        <form className="container"  onSubmit={sendData} > 

  
  <div className="form-group"> 
<i className="zmdi zmdi-account zmdi-hc-2x"></i>  
<label for="username" className="labels"> Name </label>
    <input type="text" className="form-control" id="username" aria-describedby="em" placeholder="andria12" 
    onChange={(e)=>{
      setUsername(e.target.value);
     }}   />
     
  </div>

  <div className="form-group"> 
<i className="zmdi zmdi-account zmdi-hc-2x"></i>  
<label for="contactNumber" className="labels"> Contact Number </label>
    <input type="text" className="form-control" id="contactNumber" aria-describedby="em" placeholder="1234567890"  required
    onChange={(e)=>{
      setContactNumber(e.target.value);
     }}   />
     
  </div>

  <div className="form-group"> 
<i className="zmdi zmdi-account zmdi-hc-2x"></i>  
<label for="email" className="labels"> Email Address </label>
    <input type="email" className="form-control" id="email" aria-describedby="em" placeholder="andria12@gmail.com" required
    onChange={(e)=>{
      setEmail(e.target.value);
     }}   />
     
  </div>

  <div className="form-group"> 
<i className="zmdi zmdi-account zmdi-hc-2x"></i>  
<label for="homeno" className="labels"> Home/Office No </label>
    <input type="text" className="form-control" id="homeno" aria-describedby="em" placeholder="12"  required
    onChange={(e)=>{
      setHomeno(e.target.value);
     }}   />
     
  </div>
  <div class="form-group">
  <i className="zmdi zmdi-email zmdi-hc-2x"></i>
  <label for="street" className="labels"> Street </label>
    <input type="text"  class="form-control" id="street" aria-describedby="em" placeholder="flower road" required
    onChange={(e) =>{
      setStreet(e.target.value);
     }}  />
     
  </div>

  <div class="form-group">
  <i className="zmdi zmdi-email zmdi-hc-2x"></i>
  <label for="city" className="labels"> City </label>
    <input type="text"  class="form-control" id="city" aria-describedby="em" placeholder="clombo" required
     onChange={(e) =>{
      setCity(e.target.value);
     }}  />
     
  </div>

  

  <div className="form-group ">
  <i className="zmdi zmdi-email zmdi-hc-2x"></i>
        <label for=" province" className="labels">Province</label>  
        <select class="custom-select custom-select-lg mb-3" id="province"  onChange={(e)=>{
          setProvince(e.target.value);
         }}   >
            <option>Choose</option>
          <option>Western Province</option>
          <option>Central Province</option>
          <option>Southern Province</option>
          <option>Uva Province</option>
          <option>Sabaragamuwa Province</option>
          <option>North Western Province</option>
          <option>North Central Province</option>
          <option>Nothern Province</option>
          <option>Eastern Province</option>
        </select> 
      </div>

 delivery Time
  <div class="form-check">    
  <input class="form-check-input" type="radio" name="type" id="Home" value="Home(7am - 9pm delivery)"  onChange={(e) =>{
      setDeliveryTime(e.target.value);
     }}  />
  <label class="form-check-label" for="home">
  Home(7am - 9pm delivery)
  </label>
</div>
<div class="form-check">
  <input class="form-check-input"   type="radio" name="type" id="office" value="Office(10am - 5pm delivery)" onChange={(e) =>{
      setDeliveryTime(e.target.value);
     }}  />
  <label class="form-check-label" for="office">
  Office(10am - 5pm delivery)
  </label>
</div>
<br></br>
 
  <Button type="submit" className="btnspace"  >Submit</Button>   
 
  <a className="btn btn-light btn-lg"  href="/addcuspay"> Payment</a>  
 
  <Button type="reset" className="btn btn-light btn-lg" >Reset</Button>
    
 
    
  <br></br><br></br><br></br><br></br><br></br>
</form>
</th></tr></table>
 
 
 
</div>
    );
}