import React, {useState, useEffect} from "react";
import axios from "axios";
import { Link } from "react-router-dom";




export default function DisplayStockDetails() {

    //set state
    const[stock, setStock] = useState([]);//array
    const[search,setSearch] = useState("");

    
    useEffect(()=>{
        function getStockList(){
            //code segment related to from where data get and show
            axios.get("http://localhost:8070/stock/getallstock").then((res)=>{
                console.log(res.data);
                setStock(res.data);
            }).catch((err)=>{
                alert(err.message);
            })
        }
        getStockList();
        
    },[]);
    

    return(
        <div className="container"><br/>
        <nav className="nav">
            <Link to="/stockHome" className="nav-link">Home</Link>
        </nav><br/><br/> 
            <div className="container">
          <table>
          <td><form className="d-flex">
            <input 
                  className="form-control me-2" 
                  type="search" 
                  placeholder="Search Stock"
                  name = "searchQuerystock"
                  onChange = {(e)=>setSearch(e.target.value)} /> 
            </form></td>
            <td><button className="btn btn-success"><a className="nounderline" href={`#`} style={{color:'white'}} ><i class="fas fa-file-alt"></i>&nbsp;Stock Report</a></button></td>
          </table>
          <br/><br/>
            <h1 style={{textAlign:'center'}}>Stock Details</h1><hr/>
            <table className="table">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Stock Code</th>
                    <th scope="col">Category</th>
                    <th scope="col">Model Name</th>
                    <th scope="col">Unit Price</th>
                    <th scope="col">Qty.</th>
                    <th scope="col">Status</th>
                    <th scope="col">Actions</th>
                  
                  </tr>
                </thead>
                <tbody>
                {stock.filter(val=>{
                  if(search==""){
                    return val
                  }
                  else if(val.modelName.toLowerCase().includes(search.toLowerCase())){
                    return val
                  }
                }).map((val, key)=>(
                  <tr>
                    <th valign="middle" scope="row">{key +1}</th> 
                    <td valign="middle" scope="row">
                      <a href={`/fetchStock/${val.stockCode}`} style={{textDecoration:'none'}}>
                      {val.stockCode}
                      </a></td>
                    <td valign="middle">{val.category}</td>
                    <td valign="middle">{val.modelName}</td>
                    <td valign="middle">Rs.{val.unitPrice}</td>                    
                    <td valign="middle">{val.qty}</td>
                    <td valign="middle">{val.status_avail}</td>
                   

                    
                    <td><button className="btn btn-warning custom"><a className="nounderline" href={`/editStock/${val.stockCode}`} style={{color:'white'}} ><i className="fas fa-edit"></i>&nbsp;Edit</a></button><br/><br/>
                    <button className="btn btn-danger custom"><a className="nounderline" href={`/deleteStock/${val.stockCode}`} style={{color:'white'}} ><i className="fas fa-trash-alt"></i>&nbsp;Delete</a></button></td>

                  </tr>
                   ))}
                </tbody>
              </table><br/><br/></div>
           
            </div>
     
    )
}