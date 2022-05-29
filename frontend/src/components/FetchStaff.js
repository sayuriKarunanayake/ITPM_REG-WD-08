import React,{useState,useEffect} from "react";
import axios from "axios";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

export default function FetchStaff(){
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

    const {id} = useParams();

    useEffect(()=>{
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

    return(
        <div className="container" style={{height:"800px"}}><br/><br/>
        <nav className="nav">
           <Link to="/allstaff" className="nav-link">Back</Link>
        </nav><br/>
           <h1>Staff ID : {id}</h1><br/>

            <table>
               <td><h2>{title}</h2></td>
               <td><h2>{first_name} {last_name}</h2></td>
            </table>
           
           <table className="table">

                <tr><th  style={{textAlign:"left"}} scope="col">Role </th> <td style={{textAlign:"left"}}>{role}</td></tr>
                <tr><th  style={{textAlign:"left"}} scope="col">NIC </th> <td style={{textAlign:"left"}}>{nic}</td></tr>
                <tr><th  style={{textAlign:"left"}} scope="col">Phone Number </th> <td style={{textAlign:"left"}}>{phoneNo}</td></tr>
                <tr><th  style={{textAlign:"left"}} scope="col">Email </th> <td style={{textAlign:"left"}}>{email}</td></tr>
                <tr><th  style={{textAlign:"left"}} scope="col">Password </th> <td style={{textAlign:"left"}}>{password}</td></tr>
                <tr><th  style={{textAlign:"left"}} scope="col">Registered Date </th> <td style={{textAlign:"left"}}>{regDate}</td></tr>

            </table><br/><br/>
           
       </div>
   )
    

}