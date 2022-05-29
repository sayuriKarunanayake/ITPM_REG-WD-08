import React,{useState,useEffect} from "react";
import axios from "axios";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { Button,Modal,Form, InputGroup, FormControl } from 'react-bootstrap';

export default function EditStaff(){
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

    function sendData(e){
        e.preventDefault();

        const editStaff={
            role,
            title,
            first_name,
            last_name,
            nic,
            phoneNo,
            email,
            password
        }

        axios.put(`http://localhost:8070/staff/update/${id}`, editStaff).then(()=>{
            alert("Staff Details Updated Successfully");
            handleClose();
            window.location = `/allstaff`;
            
        }).catch((err)=>{
            console.log(err);
            alert(err);
        })
    }

    return(
        <>
        
        </>
    )
}
