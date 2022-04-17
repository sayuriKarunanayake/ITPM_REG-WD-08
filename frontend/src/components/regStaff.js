import React, {useState} from "react";
import axios from "axios";
import { Link } from "react-router-dom";


export default function RegStaff(){
    const [staffID,setStaffID] = useState("");
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


        e.preventDefault();

        const newStaff ={
        staffID,
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

        axios.post("http://localhost:8070/staff/add", newStaff).then(()=>{
            alert("Registration Sucessful");
            //window.location = `/viewStock`;
        }).catch((err)=>{
            alert(err.response.data.message);
            console.log(err.message);
        })
    }


    return(
    <div>
        
    </div>
    )
}