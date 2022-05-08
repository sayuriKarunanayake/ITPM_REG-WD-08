import React ,{useState, useEffect} from "react";
import axios from "axios";
import {AppBar, Toolbar, Typography,Tab, Tabs} from "@mui/material"
import { Form, Button,Navbar,Nav,NavDropdown} from "react-bootstrap";
import { NavLink } from 'react-router-dom';
 
 

export default function AddOrder(){  //adding function

    //creating states
  const [itemName,setItemName] = useState("");
  const [itemCode,setItemCode] = useState("");
  const [itemColour,setItemColour] = useState("");
  const [username,setUsername] = useState("");

  const [value, setValue] =useState(  );
    
  function sendData(e){  //create event send data

    if( !itemName || !itemCode || !username   ){
      alert("Please fill all the fields!");
      window.location = `/adddorder`;
      return
  }

    
    e.preventDefault(); //execute setData function, when click submit button

      const newOrder ={
        
        itemName,
        itemCode ,
        itemColour,
        username 
         

      }

     axios.post(`http://localhost:8070/order/addorder`, newOrder).then(() =>{  //route from the backend

        alert("order Added.") //display if adding is successful
        window.location = `/adddelivery`;   //redirect to adding page
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
            <div><a href="/addorder"><img style={{height: 70, width: 90, marginLeft:802}}   src=" https://cdn-icons.flaticon.com/png/512/5530/premium/5530389.png?token=exp=1651864012~hmac=295680c67c0ec6b2f220042cf7cdc243"  ></img></a>
             NOW  STEP 1
            </div> 
              </Tabs> 
     
       <Tabs sx={{ml:"auto"}}   value={value} onChange={(e,val)=>setValue(val)} >
            <div><a href="/adddelivery"><img style={{height: 70, width: 90, marginLeft:350}}   src="https://cdn-icons.flaticon.com/png/512/5530/premium/5530730.png?token=exp=1651859283~hmac=1bb023322b08cf0c8350aefe185b76c3"  ></img></a>
            NEXT STEP 2   </div> 
              </Tabs>
                  
                

              </Toolbar>
            </Navbar> 

            <br></br><br></br>

<table className="ftable"><tr><th> 

        


        <form className="container"  onSubmit={sendData} > 


        <div class="form-group ">
        <i className="zmdi zmdi-account zmdi-hc-2x"></i> 
    <label for=" itemName" className="labels">Item Name</label>
    <select class="custom-select custom-select-lg mb-3" id="itemName"  onChange={(e)=>{
      setItemName(e.target.value);
     }}   >
       <option>Choose</option>
      <option>Perfume</option>
      <option>Shoe</option>
      <option>Tables</option>
      <option>Baking Tray</option>
      <option>Blender</option>
      <option>Bowl</option>
      <option>Electric cattle</option>
      <option>frying pan</option>
      <option>Mixer</option>
      <option>Oven</option>
      <option>Plate</option>
      <option>Computers</option>
      <option>Tablets</option>
      <option>Desks</option>
      <option>Tables</option>
      <option>Schol Bag</option>
      <option>Hand Bag</option>
      <option>Circuit Breakers</option>
    </select> 
  </div>

  <div className="form-group"> 
<i className="zmdi zmdi-account zmdi-hc-2x"></i>  
<label for="itemCode" className="labels"> Item code </label>
    <input type="text" className="form-control" id="itemCode" aria-describedby="em" placeholder="P123" 
    onChange={(e)=>{
    setItemCode(e.target.value);
     }}   />
     
  </div>

  <div class="form-group ">
        <i className="zmdi zmdi-account zmdi-hc-2x"></i> 
    <label for=" itemColour" className="labels">  Style Colour </label>
    <select class="custom-select custom-select-lg mb-3" id="itemColour"  onChange={(e)=>{
      setItemColour(e.target.value);
     }}   >  
     <option class="c1">Available only for fashion items</option>
      <option class="c1">White      #FFFFFF</option>
      <option class="c2" >Black     #000000</option>
      <option class="c3">Silver	    #C0C0C0</option>
      <option class="c4"> Lime   	#00FF00</option>
      <option class="c5">Green   	#008000</option>
      <option class="c6">Blue	    #0000FF</option>
      <option class="c7" >LightBlue	#ADD8E6</option>
      <option class="c8">DarkBlue	#00008B</option>
      <option class="c9">Maroon	    #800000</option>
      <option class="c10">Yellow  	#FFFF00</option>  
      <option class="c11">Pink	    #FFC0CB</option>
      <option class="c12">DeepPink  #FF1493</option>
      <option class="c13">Purple	#800080</option>
      <option class="c14">Red	    #FF0000</option>
      
    </select> 
  </div>

  <div className="form-group"> 
<i className="zmdi zmdi-account zmdi-hc-2x"></i>  
<label for="username" className="labels"> Username </label>
    <input type="text" className="form-control" id="username" aria-describedby="em" placeholder="andr123" 
    onChange={(e)=>{
    setUsername(e.target.value);
     }}   />
     
  </div>
     
<br></br>
 
  <Button type="submit" className="btnspace"  >Submit</Button>   
  <a className="btn btn-light btn-lg"  href="/addorder"> Cancel</a>  
    
  <br></br><br></br><br></br><br></br><br></br>
</form>
</th></tr></table>
<br></br><br></br><br></br>
</div>
    );
}