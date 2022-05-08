import React from "react";
import "../Assets/styles.css";

export default function AdminHome(){
    return(
        <div className="containerHome"><br/><br/>
        
            <div className="bodyHome">
            <h1 style={{color:'#8064A2'}}>ADMIN</h1>
            <br/><br/>
                <table className="container">
                <tr>
                <td><button className="btn btn-primary customhome"><a className="nounderline" href={`/allstaff`} style={{color:"white"}} ><i class="fas fa-info-circle"></i>&nbsp;Staff Details</a></button></td>
                <td><button className="btn btn-primary customhome"><a className="nounderline" href={`/cusPay`}  style={{color:"white"}}><i class="fas fa-info-circle"></i>&nbsp;Customer Payments</a></button></td>
   
                </tr>
                </table>
            </div>
        </div>
    )
}