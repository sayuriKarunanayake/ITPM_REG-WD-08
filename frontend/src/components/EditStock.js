import React,{useState,useEffect} from "react";
import axios from "axios";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

export default function EditStock() {

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

function onSubmit(e){
    e.preventDefault();

    const editStock={
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

    axios.put(`http://localhost:8070/stock/update/${id}`, editStock).then(()=>{
        alert("Stock Details Updated");
        window.location = `/viewStock`;
        
    }).catch((err)=>{
        console.log(err);
        alert(err);
    })
}


return(
    <div className="container"><br/>
     <nav className="nav">
     <Link to="/stockHome" className="nav-link">Home</Link>
     </nav><br/><br/>
        <h1>Edit Stock Details</h1><br/>
        <form className="form formEmp" onSubmit={onSubmit}>
            <div className="mb-3">
                <label for="stockCode" className="form-label">Stock Code</label>
                <input type="text" className="form-control form-controlEmp" id="stockCode" value={stockCode} disabled="disabled"/>
            </div>
            <div className="mb-3">
                <label for="category" className="form-label">Category</label>
                <input type="text" className="form-control form-controlEmp" id="category" value={category} disabled="disabled"/>
            </div>
            <div className="mb-3">
                <label for="manufacturer" className="form-label">Manufacturer</label>
                <input type="text" className="form-control form-controlEmp" id="manufacturer" value={manufacturer} disabled="disabled"/>
            </div>
            <div className="mb-3">
                <label for="supplier" className="form-label">Supplier</label>
                <input type="text" class="form-control form-controlEmp" id="supplier" value={supplier} disabled="disabled"/>
            </div>
            <div className="mb-3">
                <label for="modelName" className="form-label">Model Name</label>
                <input type="text" className="form-control form-controlEmp" id="modelName" value={modelName} disabled="disabled"/>
            </div>
            <div className="mb-3">
                <label for="unitPrice" className="form-label">Unit Price</label>
                <input type="text" className="form-control form-controlEmp" id="unitPrice" value={unitPrice} disabled="disabled"/>
            </div>
            <div className="mb-3">
                <label for="specifications" className="form-label">Specifications</label>
                <input type="text" className="form-control form-controlEmp" id="specifications" value={specifications} disabled="disabled"/>
            </div>
            <div className="mb-3">
                <label for="receivedDate" className="form-label">Received Date</label>
                <input type="text" className="form-control form-controlEmp" id="receivedDate" value={receivedDate} disabled="disabled"/>
            </div>
            <div className="mb-3">
                <label for="qty" className="form-label">Quantity</label>
                <input type="number" className="form-control form-controlEmp" id="qty" min="0" value={qty} onChange={(e)=>{
                    setQty(e.target.value);//updating state using value taken from the form 
                }}required/>
            </div>
            <div className="mb-3">
                <label for="status_avail" className="form-label">Status</label>
                <select className="form-select form-controlEmp" id="status_avail"  onChange={(e)=>{
                    setAvailStatus(e.target.value);//updating state using value taken from the form 
                }}required>
                    <option hidden>{status_avail}</option>
                    <option value="Available">Available</option>
                    <option value="Out-of-stock">Out of stock</option>
                    
                </select>
            </div>  
            <br/><br/>
            
            <table>
                <td><button type="submit" className="btn btnEmp btn-warning"><i class="fas fa-edit"></i>&nbsp;Edit Stock</button></td>
                <td><button type="button" className="btn btnEmp btn-secondary" ><a className="nounderline" href={`/viewStock`} style={{color:'white'}} ><i class="fas fa-times"></i>&nbsp;Cancel</a></button></td>
            </table>
            
        </form><br/><br/>
    </div>
);


}