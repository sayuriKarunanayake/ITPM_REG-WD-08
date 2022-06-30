import React,{Component} from 'react'
import axios from 'axios'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import {Form} from "react-bootstrap"
import { setErrors } from './setErrors'

export default class NewProductRequest extends Component{
  constructor(props){
    super(props);

     this.state = {
      email : "",
      newproductrequest:"",
      errors:{}
     };

  }
  //handle input
handleInputChange = (e) =>{
  const {name,value}  = e.target;

 this.setState({
   ...this.state,
   [name]:value,
 });
 
};
//validations to form
validate=(email,newproductrequest)=>{
  const errors = setErrors(email,newproductrequest);
this.setState({errors:errors});
return Object.values(errors).every((err)=> err === "");

};

//on submit method
onSubmit=(e)=>{
  e.preventDefault();
  
  const{email,newproductrequest}=this.state;
  if(this.validate(email,newproductrequest)){
    const data={
      email : email,
      newproductrequest:newproductrequest
  
  }
console.log(data)


//new request
axios.post("/nrequest/save",data).then((res)=>{
  alert("Request send Sucessfully"); //alert
  window.location=`/vnewrequests`;
  
  if(res.data.sucess){
    this.setState(
      {
      
      email : "",
      newproductrequest:""

      }
    )
  }
})
}  
}
render(){

    return(
      
      <Card className="text-left"> 
      <div className="addcate" >
      <div className= "container py-5">

    
  <Card.Header><h4>New Product Request</h4></Card.Header>
  <Card.Body>
  <Form >	
  <Card.Text>
  
  <div className="form-group" style={{marginBottom:'15px'}} onsubmit="return validateForm()">
  <label style={{marginBottom:'5px'}}>Email</label>
  <input type= "email" required
  className="form-control"
  name="email" 
  pattern='/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/'
  placeholder="Enter Email"
  errorText={this.state.email}
  value={this.state.email}
  onChange={this.handleInputChange}/>
 {this.state.errors.email && (
    <div className ="text-danger">{this.state.errors.email}</div>
    )}
  </div>

    
  <div className="form-group" style={{marginBottom:'15px'}}>
  <label style={{marginBottom:'5px'}}>Request</label>
  <textarea  style={{height:200}}required
  className="form-control"
  name="newproductrequest" 
  placeholder="Write Your Request......."
  errorText={this.state.newproductrequest}
  value={this.state.newproductrequest}
  onChange={this.handleInputChange}/>
  {this.state.errors.newproductrequest && (
    <div className ="text-danger">{this.state.errors.newproductrequest}</div>
    )}
 </div>


<Button variant="success"> <a href = "#" type="submit" style={{textDecoration:'none',color:'Black'}}onClick={this.onSubmit}>Send Request</a></Button> &nbsp;
<Button variant="secondary"> <a href = "/"  style={{textDecoration:'none',color:'Black'}}>Cancel</a></Button> &nbsp;


</Card.Text>
</Form>
</Card.Body>
</div></div>
  
  </Card>
)}}