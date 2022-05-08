import React, {useState, useEffect} from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function AllCusPayments(){
    //set state
    const[cuspayment,setCuspayment] = useState([]);//array
    const[search,setSearch] = useState("");

    useEffect(()=>{
        function getpaymentList(){
            //code segment related to from where data get and show
            axios.get("http://localhost:8070/cuspayment/getallcuspayment").then((res)=>{
                console.log(res.data);
                setCuspayment(res.data);
            }).catch((err)=>{
                alert(err.message);
            })
        }
        getpaymentList();
        
    },[]);

    return(
        <div className="container" style={{height:'800px'}}><br/>
        <nav className="nav">
            <Link to="/stockHome" className="nav-link">Home</Link>
        </nav><br/><br/> 
            <div className="container">
          <table>
          <td><form className="d-flex">
            <input 
                  className="form-control me-2" 
                  type="search" 
                  placeholder="Search Customer"
                  name = "searchQuery"
                  onChange = {(e)=>setSearch(e.target.value)} /> 
            </form></td>
          </table>
          <br/><br/>
            <h1 style={{textAlign:'center'}}>Customer Payment Details</h1><hr/>
            <table className="table">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Card Type</th>
                    <th scope="col">Name on Card</th>
                    <th scope="col">Card Number</th>
                    <th scope="col">Exp. date</th>
                    <th scope="col">cvv</th>
                    <th scope="col">Payment Amount</th>
                    <th scope="col">Date of Payment</th>
                  
                  </tr>
                </thead>
                <tbody>
                {cuspayment.filter(val=>{
                  if(search==""){
                    return val
                  }
                  else if(val.nameOncard.toLowerCase().includes(search.toLowerCase())){
                    return val
                  }
                }).map((val, key)=>(
                  <tr>
                    <th valign="middle" scope="row">{key +1}</th> 
                    <td valign="middle">{val.cardType}</td>
                    <td valign="middle">{val.nameOncard}</td>
                    <td valign="middle">{val.cardNo}</td>                    
                    <td valign="middle">{val.expdate}</td>
                    <td valign="middle">{val.cvv}</td>
                    <td valign="middle">Rs. {val.payamount}</td>
                    <td valign="middle">{val.paymentDate}</td>

                  </tr>
                   ))}
                </tbody>
              </table><br/><br/></div>
           
            </div>
    )

}