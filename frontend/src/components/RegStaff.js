import React, {useState} from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import {Col,Image} from "react-bootstrap";


export default function RegStaff(){
    const [staffID,setStaffID] = useState("");
    const [role,setrole] = useState("");
    const [title,setTitle] = useState("");
    const [first_name,setFname] = useState("");
    const [last_name,setLname] = useState("");
    const [nic,setNic] = useState("");  
    const [phoneNo,setPhoneno] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPwd] = useState("");
    const [regDate,setRegdate] = useState("");

    function sendData(e){
        //validations
        if(first_name.trim().length < 3 ){
            alert("Please check whether your first name is correct!");
            e.preventDefault();
        }else if(last_name.trim().length < 4){
            alert("Please check whether your last name is correct!");
            e.preventDefault();
        }else if(nic.trim().length < 10){
            alert("Please enter valid NIC number!");
            e.preventDefault();
        }else if(phoneNo.trim().length < 10){
            alert("Please enter valid phone number!");
            e.preventDefault();
        }else if(!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))){
            alert("Please enter valid email!");
            e.preventDefault();
        }else if(password.trim().length < 8){
            alert("Password cann't be less than 8 charaters!");
            e.preventDefault();
        }
        else{

        e.preventDefault();//prevent dafult behaviour when submitting

        const newStaff ={//new object to be passed
        staffID,
        role,
        title,
        first_name,
        last_name,
        nic,
        phoneNo,
        email,
        password,
        regDate
        }
        console.log(newStaff);
        //code segment related to from where data get and how
        axios.post("http://localhost:8070/staff/add", newStaff).then(()=>{
            alert("Registration Sucessful!");
            window.location = `/`;
        }).catch((err)=>{
            alert(err.response.data.message);
            console.log(err.message);
        })
    }
    }

    //demo button
  /* demo = ()=>{
       var staffid1= "sm123467";
       var role1 = "supplier manager";
       var title1 = "Mr.";
       var fname= "Saman";
       var lname = "Rathnayake";
       var nic="1989005615";
       var pnumber="0752233212";
       var emailadd = "saman@gmail.com";
       var pass="saman1234567";
       var regDate="2022-05-30";
   }*/


    return(

        <div style = {{paddingTop : "50px",paddingBottom : "50px",paddingLeft:"550px", backgroundColor: '#E3E7E8'}}>
        <nav className="nav">
            <Link to="/" className="nav-link">Already Registered..Login</Link>
        </nav><br/><br/>
        <div className="">
            <table style = {{width:"60%", backgroundColor: '#FACDF9',borderRadius:'1.5em'}}>
                <br/><br/><h3 style = {{textAlign : 'center'}}>Staff Registration</h3><br/><br/>
                <div>
                <form className='loginform' onSubmit = {sendData} class="px-4 py-3">
                    <div class="form-group">
                    <label for="StaffID">Staff ID</label><br/>
                    <input type="text" class="form-control" id="StaffID" placeholder="Enter Staff ID" required 
                    onChange = {(e) =>{
                        setStaffID(e.target.value);
                    }}/>
                    </div><br/>
                    <div class="form-group">
                    <label for="role">Role</label><br/>
                    <select className="form-select form-control" id="role" 
                    onChange = {(e) =>{
                        setrole(e.target.value);
                    }}required>
                        <option value="" disabled selected>Select Role</option>
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
                        setTitle(e.target.value);
                    }}required>
                        <option value="" disabled selected>Select</option>
                        <option value="Mr.">Mr.</option>
                        <option value="Ms.">Ms.</option>
                    </select>    
                    </div><br/>
                    <div class="form-group">
                    <label for="Fname">First Name</label><br/>
                    <input type="text" class="form-control" id="Fname" placeholder="enter first name" required
                    onChange = {(e) =>{
                        setFname(e.target.value);
                    }}/>
                    </div><br/>
                    <div class="form-group">
                    <label for="Lname">Last Name</label><br/>
                    <input type="text" class="form-control" id="Lname" placeholder="Enter last name" required
                    onChange = {(e) =>{
                        setLname(e.target.value);
                    }}/>
                    </div><br/>
                    <div class="form-group">
                    <label for="Nic">NIC</label><br/>
                    <input type="text" class="form-control" id="Nic" placeholder="Enter NIC" maxLength={10} required
                    onChange = {(e) =>{
                        setNic(e.target.value);
                    }}/>
                    </div><br/>
                    <div class="form-group">
                    <label for="Phoneno">Phone Number</label><br/>
                    <input type="text" class="form-control" id="Phoneno" placeholder="Enter Phone No." maxLength={10} required
                    onChange = {(e) =>{
                        setPhoneno(e.target.value);
                    }}/>
                    </div><br/>
                    <div class="form-group">
                    <label for="Email">Email</label><br/>
                    <input type="text" class="form-control" id="Email" placeholder="Enter Email" required
                    onChange = {(e) =>{
                        setEmail(e.target.value);
                    }}/>
                    </div><br/>
                    <div class="form-group">
                    <label for="Pwd">Password</label><br/>
                    <input type="text" class="form-control" id="Pwd" placeholder="Enter password" maxLength={20} required
                    onChange = {(e) =>{
                        setPwd(e.target.value);
                    }}/>
                    </div><br/>
                    <div class="form-group">
                    <label for="Regdate">Registered Date</label><br/>
                    <input type="date" class="form-control" id="Regdate"  required
                    onChange = {(e) =>{
                        setRegdate(e.target.value);
                    }}/><br/>
                    </div><br/><br/>

                    <table>
                    <td><button type="submit" className="btn btnEmp btn-primary"><i class="fas fa-user-plus"></i>&nbsp;Register</button></td>
                    <td><button type="reset" className="btn btnEmp btn-secondary"><i class="fas fa-eraser"></i>&nbsp;Clear</button></td>
                </table>
                </form>
            
                <br/><br/> 
                </div>
            </table>
            </div>
        </div>
         
   
    )
}