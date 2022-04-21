import React, {useState} from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function AddStock(){
    const [stockCode,setStockCode] = useState("");
    const [category,setCategory] = useState("");
    const [manufacturer,setManufacturer]=useState(""); 
    const [supplier,setSupplier] = useState("");
    const [modelName,setModelName] = useState(""); 
    const [unitPrice,setUnitPrice] = useState(""); 
    const [specifications,setSpecifications] = useState(""); 
    const [receivedDate,setReceivedDate] = useState(""); 
    const [qty,setQty] = useState(""); 
    const [status_avail,setAvailStatus] = useState(""); 

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
        console.log(newStock);

        axios.post("http://localhost:8070/stock/add",newStock).then(()=>{
            alert("Stock added sucessfully");
            window.location = `/viewStock`;
        }).catch((err)=>{
            alert(err.response.data.message);
            console.log(err.message);
        })
    }


    return(
        <div className="container"><br/>
         <nav className="nav">
         <Link to="/stockHome" className="nav-link">Home</Link>
         </nav><br/><br/>
            <h1>Add New Stock</h1><br/>
            <form className="form formEmp" onSubmit={sendData}>
                <div className="mb-3">
                    <label for="stockCode" className="form-label">Stock Code</label>
                    <input type="text" className="form-control form-controlEmp" id="stockCode" onChange={(e)=>{
                        setStockCode(e.target.value);//updating state using value taken from the form 
                    }} required/>
                </div>
                <div className="mb-3">
                    <label for="category" className="form-label">Category</label>
                    <select className="form-select form-controlEmp" id="category" onChange={(e)=>{
                        setCategory(e.target.value);//updating state using value taken from the form 
                    }}required>
                        <option value="" disabled selected>Select</option>
                        <option value="Electric Items">Electric Items</option>
                        <option value="Kitchen tools">Kitchen tools</option>
                        <option value="Furniture">Furniture</option>
                    </select>
                </div>
                <div className="mb-3">
                    <label for="manufacturer" className="form-label">Manufacturer</label>
                    <input type="text" className="form-control form-controlEmp" id="manufacturer" onChange={(e)=>{
                        setManufacturer(e.target.value);//updating state using value taken from the form 
                    }}required/>
                </div>
                <div className="mb-3">
                    <label for="supplier" className="form-label">Supplier</label>
                    <input type="text" class="form-control form-controlEmp" id="supplier" onChange={(e)=>{
                        setSupplier(e.target.value);//updating state using value taken from the form 
                    }}required/>
                </div>
                <div className="mb-3">
                    <label for="modelName" className="form-label">Model Name</label>
                    <input type="text" className="form-control form-controlEmp" id="modelName" onChange={(e)=>{
                        setModelName(e.target.value);//updating state using value taken from the form 
                    }}required/>
                </div>
                <div className="mb-3">
                    <label for="unitPrice" className="form-label">Unit Price</label>
                    <input  type="text" inputmode="numeric" className="form-control form-controlEmp" id="unitPrice" min="0" onChange={(e)=>{
                        setUnitPrice(e.target.value);//updating state using value taken from the form 
                    }}required/>
                </div>
                <div className="mb-3">
                    <label for="specifications" className="form-label">Specifications</label>
                    <input type="text" className="form-control form-controlEmp" id="specifications" onChange={(e)=>{
                        setSpecifications(e.target.value);//updating state using value taken from the form 
                    }}required/>
                </div>
                <div className="mb-3">
                    <label for="receivedDate" className="form-label">Received Date</label>
                    <input type="date" className="form-control form-controlEmp" id="receivedDate" onChange={(e)=>{
                        setReceivedDate(e.target.value);//updating state using value taken from the form 
                    }}required/>
                </div>
                <div className="mb-3">
                    <label for="qty" className="form-label">Quantity</label>
                    <input type="number" className="form-control form-controlEmp" id="qty" min="0" onChange={(e)=>{
                        setQty(e.target.value);//updating state using value taken from the form 
                    }}required/>
                </div>
                <div className="mb-3">
                    <label for="status_avail" className="form-label">Status</label>
                    <select className="form-select form-controlEmp" id="status_avail" onChange={(e)=>{
                        setAvailStatus(e.target.value);//updating state using value taken from the form 
                    }}required>
                        <option value="" disabled selected>Select</option>
                        <option hidden>{status_avail}</option>
                        <option value="Available">Available</option>
                        <option value="Out-of-stock">Out of stock</option>
                    </select>
                </div>  
                <br/><br/>
                <table>
                    <td><button type="submit" className="btn btnEmp btn-primary"><i class="fas fa-plus"></i>&nbsp;Add Stock</button></td>
                    <td><button type="reset" className="btn btnEmp btn-secondary" ><i class="fas fa-eraser"></i>&nbsp;Clear</button></td>
                </table>
            </form><br/><br/>
        </div>
    );
}