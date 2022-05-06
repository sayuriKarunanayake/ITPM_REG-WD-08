import React,{useState,useEffect} from "react";
import axios from "axios";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import {Table} from "react-bootstrap";

export default function FetchStock(){
    const[stockCode,setStockCode] = useState("");
    const [category,setCategory] = useState("");
    const [manufacturer,setManufacturer]=useState(""); 
    const [supplier,setSupplier] = useState("");
    const [modelName,setModelName] = useState(""); 
    const [unitPrice,setUnitPrice] = useState(""); 
    const [specifications,setSpecifications] = useState(""); 
    const [receivedDate,setReceivedDate] = useState(""); 
    const [qty,setQty] = useState(""); 
    const [status_avail,setAvailStatus] = useState(""); 


    const {id} =useParams();

    useEffect(()=>{
       
        axios.get(`http://localhost:8070/stock/get/${id}`).then((res)=>{
            console.log(res.data);
            setStockCode(res.data.stock.stockCode);
            setCategory(res.data.stock.category);
            setManufacturer(res.data.stock.manufacturer);
            setSupplier(res.data.stock.supplier);
            setModelName(res.data.stock.modelName);
            setUnitPrice(res.data.stock.unitPrice);
            setSpecifications(res.data.stock.specifications);
            setReceivedDate(res.data.stock.receivedDate);
            setQty(res.data.stock.qty);
            setAvailStatus(res.data.stock.status_avail);

        }).catch((err)=>{
            alert(err.message)
        })
    
   
    },[]);


    return(
        <div className="container"><br/><br/>
         <nav className="nav">
            <Link to="/viewStock" className="nav-link">Back</Link>
         </nav><br/>
            <h1>Stock Code : {id}</h1><br/>
            <table className="table">
            
            <tr><th  style={{textAlign:"left"}} scope="col">Category </th> <td style={{textAlign:"left"}}>{category}</td></tr>
            <tr><th  style={{textAlign:"left"}} scope="col">Manufacturer </th> <td style={{textAlign:"left"}}>{manufacturer}</td></tr>
            <tr><th  style={{textAlign:"left"}} scope="col">Supplier </th> <td style={{textAlign:"left"}}>{supplier}</td></tr>
            <tr><th  style={{textAlign:"left"}} scope="col">Model Name </th> <td style={{textAlign:"left"}}>{modelName}</td></tr>
            <tr><th  style={{textAlign:"left"}} scope="col">Unit Price </th> <td style={{textAlign:"left"}}>{unitPrice}</td></tr>
            <tr><th  style={{textAlign:"left"}} scope="col">Specifications </th> <td style={{textAlign:"left"}}>{specifications}</td></tr>
            <tr><th  style={{textAlign:"left"}} scope="col">Received Date </th> <td style={{textAlign:"left"}}>{receivedDate}</td></tr>
            <tr><th  style={{textAlign:"left"}} scope="col">Qty. </th> <td style={{textAlign:"left"}}>{qty}</td></tr>
            <tr><th  style={{textAlign:"left"}} scope="col">Status </th> <td style={{textAlign:"left"}}>{status_avail}</td></tr>

                                
            
            </table><br/><br/>
            
        </div>
    )

}