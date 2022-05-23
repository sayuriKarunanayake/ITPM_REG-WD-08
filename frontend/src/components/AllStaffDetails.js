import React, {useState, useEffect} from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function AllStaffDetails(){

    //set states
    const[staff,setStaff] = useState([]);
    const[search,setSearch] = useState("");

    useEffect(()=>{
        function getStaffList(){
            //code segment related to from where data get and show
            axios.get("http://localhost:8070/staff/getallStaff").then((res)=>{
                console.log(res.data);
                setStaff(res.data);
            }).catch((err)=>{
                alert(err.message);
            })
        }
        getStaffList();
        
    },[]);

    function onDelete(id)  {
      const r = window.confirm("Do you really want to delete this staff member?");
      if(r === true){
      axios.delete(`http://localhost:8070/staff/delete/${id}`).then(()=>{
          alert("Staff Member Deleted");
          window.location = `/allstaff`;
          
      }).catch((err)=>{
          console.log(err);
          alert(err);
      })
    }
  }

    return(
        <div className="container" ><br/>
            <nav className="nav">
            <Link to="/adminHome" className="nav-link">Home</Link>
        </nav><br/><br/> 
            <div className="container">
          <table>
          <td><form className="d-flex">
            <input 
                  className="form-control me-2" 
                  type="search" 
                  placeholder="Search Stock"
                  name = "searchQuerystock"
                  onChange = {(e)=>setSearch(e.target.value)} /> 
            </form></td>
            
          </table>
          <br/><br/>
            <h1 style={{textAlign:'center'}}>Staff Details</h1><hr/>
            <table className="table">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Staff ID</th>
                    <th scope="col">Role</th>
                    <th scope="col">Title</th>
                    <th scope="col">First Name</th>
                    <th scope="col">Last Name</th>
                    <th scope="col">NIC</th>
                    <th scope="col">Phone No.</th>
                    <th scope="col">Email</th>
                    <th scope="col">Password</th>
                    <th scope="col">Registered Date</th>
                    <th scope="col">Actions</th>
                  
                  </tr>
                </thead>
                <tbody>
                {staff.filter(val=>{
                  if(search==""){
                    return val
                  }
                  else if(val.first_name.toLowerCase().includes(search.toLowerCase())){
                    return val
                  }
                }).map((val, key)=>(
                  <tr>
                    <th valign="middle" scope="row">{key +1}</th> 
                    <td valign="middle">{val.staffID}</td>
                    <td valign="middle">{val.role}</td>
                    <td valign="middle">{val.title}</td>                    
                    <td valign="middle">{val.first_name}</td>
                    <td valign="middle">{val.last_name}</td>
                    <td valign="middle">{val.nic}</td>
                    <td valign="middle">{val.phoneNo}</td>
                    <td valign="middle">{val.email}</td>
                    <td valign="middle">{val.password}</td>
                    <td valign="middle">{val.regDate}</td>
                   
                   

                    
                    <td><button className="btn btn-danger custom" onClick = {() =>onDelete(val.staffID)}><a className="nounderline" style={{color:'white'}} ><i className="fas fa-trash-alt"></i>&nbsp;Delete</a></button></td>

                  </tr>
                   ))}
                </tbody>
              </table><br/><br/></div>
        </div>
    )

}