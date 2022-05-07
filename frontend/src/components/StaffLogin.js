import { useState } from 'react';
import axios from 'axios';
import { ReactSession } from "react-client-session";
import { useNavigate } from 'react-router';
import{
    Label,
    Input,
    Button
}
from 'reactstrap'


export default function StaffLogin(){
    const [staffID , setstaffID] = useState();
    const [password , setPassword] = useState();

    let history = useNavigate();

    function submit(e){

        e.preventDefault();
        axios.get(`http://localhost:8070/staff/get/${staffID}`).then((res) =>{
                    console.log(res);
                    if(password !== res.data.staff.password){
                        alert("Check password again");
                    }
                    else{
                        ReactSession.set("staff" , res.data.staff);
                        if(res.data.staff.role === "stock manager"){
                            //Home of Stock Manager
                            history(`/stockHome`);
                        }
                        else{
                           
                            history(`/addStock`);
                        }
                    }
                
            
            
        }).catch((err) =>{
            console.log(err);
            alert("Invalid StaffID");
         })
    }

    return(
        <>
             <div style = {{paddingTop : "50px",paddingBottom : "50px",paddingLeft:"550px"}}>
            <table border="1" style = {{width:"40%"}}>
                <br/><br/><h3 style = {{textAlign : 'center'}}>Staff Login</h3><br/><br/>
                <div className='container'>
            
                <form className='loginform' onSubmit = {submit} class="px-4 py-3">
                    <div class="form-group">
                    <label for="staffID">Staff ID</label><br/>
                    <input type="text" class="form-control" id="staffID" placeholder="Enter StaffID" required 
                    onChange = {(e) =>{
                        setstaffID(e.target.value);
                    }}/>
                    </div><br/>
                    <div class="form-group">
                    <label for="exampleDropdownFormPassword1">Password</label><br/>
                    <input type="text" class="form-control" id="exampleDropdownFormPassword1" placeholder="Enter Password" required
                    onChange = {(e) =>{
                        setPassword(e.target.value);
                    }}/><br/>
                    </div><br/>
                    <div class="form-check">
                    <input type="checkbox" class="form-check-input" id="dropdownCheck"/>
                    <label class="form-check-label" for="dropdownCheck">
                        Remember me
                    </label>
                    </div><br/>
                    <button type="submit" class="btn btn-primary">Sign in</button><br/>
                </form>
            
                <div class="dropdown-divider"></div>
                <a class="dropdown-item" href="/regStaff">New around here? Register</a>
                <a class="dropdown-item" href="#">Forgot password?</a>
            
                <br/><br/> 
                </div>
            </table>
        </div>   
        </>
    )

}

