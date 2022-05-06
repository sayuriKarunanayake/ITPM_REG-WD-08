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
             <div style = {{paddingTop : "50px"}}>
            <br/><br/><h3 style = {{textAlign : 'center'}}>Staff Login</h3><br/><br/>
            <div className='container'>
            <form  onSubmit = {submit} encType = "multipart/form-data">

                <Label for = "staffID">Staff ID</Label><br/>
                <Input type = 'text' name = "staffID" placeholder = "Enter staffID" required 
                onChange = {(e) =>{
                    setstaffID(e.target.value);
                }}
                ></Input><br/>

                <Label for = "Password">Password</Label><br/>
                <Input type = 'text' name = "password" placeholder = "Enter Password" required
                onChange = {(e) =>{
                    setPassword(e.target.value);
                }}
                ></Input>
                <div id="emailHelp" class="form-text">max 20 characters, min 5 characters</div>
                <br/>

                <Button color = "primary" type = "submit" style = {{float:'right' , margin : "5px" }}>Login</Button><br/><br/>
            </form>   <br/><br/> 
            </div>
        </div>   
        </>
    )

}

