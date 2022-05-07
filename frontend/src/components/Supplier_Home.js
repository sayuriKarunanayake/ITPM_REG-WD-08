import React from "react";
import "../Assets/styles.css";

export default function Supplier_Home(){
    return(
        <div className="containerHome"><br/><br/>
        
            <div className="bodyHome">
            <h1 style={{color:'#8064A2'}}>SUPPLIER MANAGEMENT</h1>
            <br/><br/>
                <table className="container">
                <tr>
                <td><button className="btn btn-primary customhome"><a className="nounderline" href={`/Supplier_Details`} style={{color:"white"}} ><i class="fas fa-plus"></i>&nbsp;Supplier Details</a></button></td>
                <td><button className="btn btn-primary customhome"><a className="nounderline" href={`/Payment_Details`}  style={{color:"white"}}><i class="fas fa-info-circle"></i>&nbsp;Payment Details</a></button></td>
                <td><button className="btn btn-primary customhome"><a className="nounderline" href={`/Supplier_Payment_Details`}  style={{color:"white"}}><i class="fas fa-info-circle"></i>&nbsp;Supplier Payment</a></button></td>
   
                </tr>
                </table>
            </div>
        </div>
    )
}