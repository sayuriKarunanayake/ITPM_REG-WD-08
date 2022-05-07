import React ,{useState, useEffect} from "react";
import axios from "axios";
import { Button } from "react-bootstrap";
import {Link} from "react-router-dom";
 
 

export default function AddFeedback(){  //adding function

    //creating states
  const [username,setUsername] = useState("");
  const [email,setEmail] = useState("");
  const [type,setType] = useState("");
  const [contactNumber,setContactNumber] = useState("");
  const [message,setMessage] = useState(""); 
 

  function sendData(e){  //create event send data

    if( !email || !message){
      alert("Kindly add email and feedback!");
      return
  }

    else if(!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))){
      alert("Incorrect Email type");
      return
  }

   
    e.preventDefault(); //execute setData function, when click submit button

      const newFeedback ={
        
        username,
        email,
        type,
        contactNumber,
        message 

      }

     axios.post(`http://localhost:8070/feedback/addf`, newFeedback).then(() =>{  //route from the backend

        alert("Feedback Added.") //display if adding is successful
        window.location = `/addf`;  //redirect to adding page
     }).catch((err) =>{   //display error if adding is not successful
        alert(err)
     })
  }

    return(
 
     <div className="addf"> 
       <br></br>
       <blockquote class="blockquote"><center>
  <h1 class="mb-0">Complaints and Feedback</h1>
  < p class="blockquote-footer">Show us some love....<cite title="Source Title"> </cite> </p>
</center></blockquote>
       <br></br><table className="ftable"><tr><th> 
        <form className="container"  onSubmit={sendData} > 

<div className="form-group"> 
<i className="zmdi zmdi-account zmdi-hc-2x"></i>  
     
    <input type="text" className="form-control" id="username" aria-describedby="em" placeholder="andria12" 
    onChange={(e)=>{
      setUsername(e.target.value);
     }}   />
     
  </div>
  <div class="form-group">
  <i className="zmdi zmdi-email zmdi-hc-2x"></i>
     
    <input type="email"  class="form-control" id="email" aria-describedby="emailHelp" placeholder="andria@gmail.com" onChange={(e) =>{
      setEmail(e.target.value);
     }}  />
    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>

  Type
  <div class="form-check">    
  <input class="form-check-input" type="radio" name="type" id="feedback" value="feedback"  onChange={(e) =>{
      setType(e.target.value);
     }}  />
  <label class="form-check-label" for="feedback">
    Feedback
  </label>
</div>
<div class="form-check">
  <input class="form-check-input"   type="radio" name="type" id="complaint" value="complint" onChange={(e) =>{
      setType(e.target.value);
     }}  />
  <label class="form-check-label" for="complaint">
    Complaint
  </label>
</div>
<br></br>
<div class="form-group">
<i className="zmdi zmdi-phone zmdi-hc-2x"></i>
     
    <input type="text" class="form-control" id="contactNumber" aria-describedby="em" placeholder="076543216" onChange={(e) =>{
      setContactNumber(e.target.value);
     }}  />
     
  </div>
 
  <div class="form-group">
   
    <label for="message">How was the experience?</label>
    <textarea class="form-control" id="message" rows="3" placeholder="Share your thoughts" onChange={(e) =>{
      setMessage(e.target.value);
     }}></textarea>
  </div>

 
  <Button type="submit" className="btnspace"  >Submit</Button>   
  <a className="btn btn-light btn-lg"  href="/readf"> View some feedbacks</a>  
    
  <br></br><br></br><br></br><br></br><br></br>
</form>
</th></tr></table>
 
</div>
    );
}