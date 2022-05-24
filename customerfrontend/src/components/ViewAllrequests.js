import React, {Component} from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';

export default class ViewAllnewrequests extends Component{
  constructor(props){
    super(props);

    this.state={
      nrequests:[]
    };
  }
  

  /////////////
  componentDidMount(){
    this.retrieveNrequests();
  }

retrieveNrequests(){
  axios.get("/nrequests").then(res=>{
    if(res.data.success){
      this.setState({
        nrequests:res.data.existingNrequests
      } );
console.log(this.state.nrequests);
}

});
}  

//create  search by email
filterData(nrequests,searchKey){
const result = nrequests.filter((nrequest)=>
nrequest.email.includes(searchKey)
)
this.setState({nrequests:result})
}
handleSearchArea = (e)=>{
const searchKey = e.currentTarget.value;

axios.get("/nrequests").then(res=>{
  if(res.data.success){
    this.filterData(res.data.existingNrequests,searchKey)
    }
  });
}

render(){
  return( 
    <div className='addcate'>
    <div className= "container py-5">
    <div className="row">
      <div className="col-lg-9 mt-2 mb-2">
        <h2>All  New Requests</h2>  
        </div>
        <br></br>

<div className="catego">
<div className="col-lg-9 mt-2 mb-2">
</div>
<input
className ="form-control"
type ="search"
placeholder="Search"
onChange={this.handleSearchArea}>
</input>

</div>
       <table className ="table table-hover" style={{marginTop:'40'}}>
  <thead>
    <tr>
        <th scope ="col">No</th>
        <th scope ="col">Email</th> 
        <th scope ="col">New Requests</th>
      </tr>
    </thead>

    <tbody>
      
    { this.state.nrequests.map((nrequests,index)=>(
      <tr>
            <th scope="row"> {index+1}</th>

            <td> {nrequests.email}</td> 
            <td> {nrequests.newproductrequest} </td> 
              
         </tr>
    ))}
    
         </tbody></table>
         
         <Button variant="primary"><a href = "/" style={{textDecoration:'none',color:'Black'}}>Back</a></Button>
         
 </div></div></div>
    )

}}