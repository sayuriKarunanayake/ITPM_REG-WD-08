import React, {useState} from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function addStock(){
    const[stockCode,setStockCode] = useState("");
    const [category,setCategory] =useState("");
    const [manufacturer,setManufacturer]=useState(""); 
    const [supplier,setSupplier] =useState("");
    const [modelName,setModelName] =useState(""); 
    const [unitPrice,setUnitPrice] =useState(""); 
    const [specifications,setSpecifications] =useState(""); 
    const [receivedDate,setReceivedDate] =useState(""); 
    const [qty,setQty] =useState(""); 
    const [status_avail,setAvailStatus] =useState(""); 

    function sendData(e){
        //validations


        e.preventDefault();//to prevent normal behavior of submit

        const newStock = {
        stockCode,
        category,
        manufacturer,
        supplier,
        modelName,
        unitPrice,
        specifications,
        receivedDate,
        qty,
        status_avail
        }

        axios.post("http://localhost:3000/stock/addstock",newStock).then(()=>{
            alert("Stock added sucessfully");
            window.location = ``;
        }).catch((err)=>{
            alert(err.response.data.message);
            console.log(err.message);
        })
    }

    return(
        
    )
}