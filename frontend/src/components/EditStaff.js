import React,{useState,useEffect} from "react";
import axios from "axios";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { Button,Modal,Form, InputGroup, FormControl } from 'react-bootstrap';

export default function EditStaff(){
    //set states
    const[staffID,setstaffID] = useState("");
    const[role,setrole] = useState("");
    const[title,settitle] = useState("");
    const[first_name,setfirst_name] = useState("");
    const[last_name,setlast_name] = useState("");
    const[nic,setnic] = useState("");
    const[phoneNo,setphoneNo] = useState("");
    const[email,setemail] = useState("");
    const[password,setpassword] = useState("");
    const[regDate,setregDate] = useState("");

    const {id} = useParams();//to catch id parameter from url

    useEffect(()=>{
        //display all details
        axios.get(`http://localhost:8070/staff/get/${id}`).then((res)=>{
            console.log(res.data);
            setstaffID(res.data.staff.staffID);
            setrole(res.data.staff.role);
            settitle(res.data.staff.title);
            setfirst_name(res.data.staff.first_name);
            setlast_name(res.data.staff.last_name);
            setnic(res.data.staff.nic);
            setphoneNo(res.data.staff.phoneNo);
            setemail(res.data.staff.email);
            setpassword(res.data.staff.password);
            setregDate(res.data.staff.regDate);

        }).catch((err)=>{
            alert(err.message)
        })
    },[]);
    //edit function
    function sendData(e){
        e.preventDefault();

        const editStaff={//edited values in object to be passed
            role,
            title,
            first_name,
            last_name,
            nic,
            phoneNo,
            email,
            password
        }
        //code segment related to from where data get and how
        axios.put(`http://localhost:8070/staff/update/${id}`, editStaff).then(()=>{
            alert("Staff Details Updated Successfully");
            window.location = `/allstaff`;
            
        }).catch((err)=>{
            console.log(err);
            alert(err);
        })
    }

    return(
        <div style = {{paddingTop : "50px",paddingBottom : "50px",paddingLeft:"550px", backgroundColor: '#E3E7E8'}}>
        <nav className="nav">
            <Link to="/allstaff" className="nav-link">Back</Link>
        </nav><br/><br/>
        <div className="">
            <table style = {{width:"60%", backgroundColor: '#FACDF9',borderRadius:'1.5em'}}>
                <br/><br/><h3 style = {{textAlign : 'center'}}>Update Staff Details</h3><br/><br/>
                <div>
                <form className='loginform' onSubmit = {sendData} class="px-4 py-3">
                    <div class="form-group">
                    <label for="StaffID">Staff ID</label><br/>
                    <input type="text" class="form-control" id="StaffID" value={staffID} disabled/>
                    </div><br/>
                    <div class="form-group">
                    <label for="role">Role</label><br/>
                    <select className="form-select form-control" id="role" 
                    onChange = {(e) =>{
                        setrole(e.target.value);
                    }}required>
                        <option value={role} disabled selected>{role}</option>
                        <option value="Admin">Admin</option>
                        <option value="stock manager">Stock Manager</option>
                        <option value="supplier manager">Supplier Manager</option>
                        <option value="products manager">Products Manager</option>
                    </select>  
                    </div><br/>
                    <div class="form-group">
                    <label for="Title">Title</label><br/>
                    <select className="form-select form-control" id="Title" 
                    onChange = {(e) =>{
                        settitle(e.target.value);
                    }}required>
                        <option value={title} disabled selected>{title}</option>
                        <option value="Mr.">Mr.</option>
                        <option value="Ms.">Ms.</option>
                    </select>    
                    </div><br/>
                    <div class="form-group">
                    <label for="Fname">First Name</label><br/>
                    <input type="text" class="form-control" id="Fname" value={first_name}  required
                    onChange = {(e) =>{
                        setfirst_name(e.target.value);
                    }}/>
                    </div><br/>
                    <div class="form-group">
                    <label for="Lname">Last Name</label><br/>
                    <input type="text" class="form-control" id="Lname" value={last_name} required
                    onChange = {(e) =>{
                        setlast_name(e.target.value);
                    }}/>
                    </div><br/>
                    <div class="form-group">
                    <label for="Nic">NIC</label><br/>
                    <input type="text" class="form-control" id="Nic" value={nic} maxLength={10} disabled/>
                    </div><br/>
                    <div class="form-group">
                    <label for="Phoneno">Phone Number</label><br/>
                    <input type="text" class="form-control" id="Phoneno" value={phoneNo}  maxLength={10} required
                    onChange = {(e) =>{
                        setphoneNo(e.target.value);
                    }}/>
                    </div><br/>
                    <div class="form-group">
                    <label for="Email">Email</label><br/>
                    <input type="text" class="form-control" id="Email" value={email} required
                    onChange = {(e) =>{
                        setemail(e.target.value);
                    }}/>
                    </div><br/>
                    <div class="form-group">
                    <label for="Pwd">Password</label><br/>
                    <input type="text" class="form-control" id="Pwd" value={password}  maxLength={20} required
                    onChange = {(e) =>{
                        setpassword(e.target.value);
                    }}/>
                    </div><br/>
                    <div class="form-group">
                    <label for="Regdate">Registered Date</label><br/>
                    <input type="date" class="form-control" id="Regdate"  value={regDate} disabled/><br/>
                    </div><br/><br/>

                    <table>
                    <td><button type="submit" className="btn btnEmp btn-warning"><i class="fas fa-edit"></i>&nbsp;Update</button></td>
                    <td><button type="button" className="btn btnEmp btn-secondary" ><a className="nounderline" href={`/allstaff`} style={{color:'white'}} ><i class="fas fa-times"></i>&nbsp;Cancel</a></button></td>
                </table>
                </form>
            
                <br/><br/> 
                </div>
            </table>
            </div>
        </div>
    )
}
