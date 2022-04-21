import React from "react";
import "../Assets/styles.css";

export default function StockHome(){
    return(
        <div className="containerHome"><br/><br/>
        
            <div className="bodyHome">
            <h1 style={{color:'#8064A2'}}>Stock MANAGEMENT</h1>
            <br/><br/>
                <table className="container">
                <tr>
                <td><button className="btn btn-primary customhome"><a className="nounderline" href={`/addStock`} style={{color:"white"}} ><i class="fas fa-plus"></i>&nbsp;Add New Stock</a></button></td>
                <td><button className="btn btn-primary customhome"><a className="nounderline" href={`/viewStock`}  style={{color:"white"}}><i class="fas fa-info-circle"></i>&nbsp;View Stock Details</a></button></td>
   
                </tr>
                </table>
            </div>
        </div>
    )
}