import React,{Component} from 'react'
import axios from 'axios'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import {Form} from "react-bootstrap"




export default class NewProductRequest extends Component{
  constructor(props){
    super(props);

     this.state = {
      email : "",
      newproductrequest:"",
     };

  }
  
handleInputChange = (e) =>{
  const {name,value}  = e.target;

 this.setState({
   ...this.state,
   [name]:value,
 });
 
};

onSubmit=(e)=>{
  e.preventDefault();
  
  const{email,newproductrequest}=this.state;

  
    const data={
      
      email : email,
      newproductrequest:newproductrequest
  
  }
console.log(data)

axios.post("/nrequest/save",data).then((res)=>{
  alert("Request send Sucessfully");
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

  render(){
    return(
      
      <Card className="text-right"> 
      <div className="reserve" >
      <div className= "container py-5">

    
  <Card.Header><h4>New Product Request</h4></Card.Header>
  <Card.Body>
  <Form >	
  <Card.Text>
  
  <div className="form-group" style={{marginBottom:'15px'}}>
  <label style={{marginBottom:'5px'}}>Email</label>
  <input type= "email" required
  className="form-control"
  name="email" 
  placeholder="Enter Email"
  value={this.state.email}
  onChange={this.handleInputChange}/>
  
  </div>

    
  <div className="form-group" style={{marginBottom:'15px'}}>
  <label style={{marginBottom:'5px'}}>Request</label>
  <textarea  style={{height:200}}required
  className="form-control"
  name="newproductrequest" 
  placeholder="Write Your Request......."
  errorText={this.state.comment}
  value={this.state.comment}
  onChange={this.handleInputChange}/>

 </div>


<Button variant="primary"> <a type="submit" style={{textDecoration:'none',color:'Black'}}onClick={this.onSubmit}>Send Request</a></Button> &nbsp;
<Button variant="primary"> <a href = "/" type="submit" style={{textDecoration:'none',color:'Black'}}>Cancel</a></Button> &nbsp;


</Card.Text>
</Form>
</Card.Body>
</div></div>
  
  </Card>

)}}