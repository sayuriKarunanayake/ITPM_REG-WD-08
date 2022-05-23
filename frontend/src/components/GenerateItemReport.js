import React, { useState, useEffect } from "react";
import axios from "axios";
import jsPDF from "jspdf";
import "jspdf-autotable";
import { Link } from "react-router-dom";

const ItemReport = reports => {
 const doc = new jsPDF({orientation:"landscape",lineHeight:1.5});
 const tableColumns = ["Item Code","Item Name","Item Price","Item Description"];
 const tableRows = [];

 reports.forEach(report => {
     const reportData = [
        report.itemcode,
        report.category,
        report.itemname,
        report.itemprice,
        report.itemdescription,
        report.date
       
     ];
     
     tableRows.push(reportData); 
 });
 doc.autoTable(tableColumns,tableRows,{startY:20});
 doc.text("Monthly Added Item Report",14,15);
 doc.save(`Item_MonthlyReport.pdf`);

};

const GenerateItemReport = () => {
    const[reports,setReports]=useState([]);
    const[date,setdate]=useState(0);

    useEffect( () => {
        function getItemOnMonth(){
          
            axios.get("http://localhost:5000/items").then((res)=>{
                console.log(res.data);
                setReports(res.data);
            }).catch((err)=>{
                alert(err.message);
            })
        }
        getItemOnMonth();

    }, []);

    const reportItem = reports.filter(report=>report.date.substring(5, 7)==date);
    const filterItem = report=>report.date.substring(5, 7)==date;

    return(
        <div className="container" style={{paddingLeft:"20px",paddingRight:"100px",height:"800px"}}><br/><br/>
        <nav className="nav">
            <Link to="/items" className="nav-link">Back</Link>
         </nav><br/>
           <select className="form-select form-controlEmp" id="month" onChange={(e)=>{
                        setdate(e.target.value);//updating state using value taken from the form 
                    }}required>
                        <option value="" disabled selected>Select received month</option>
                        <option value="01">Jan</option>
                        <option value="02">Feb</option>
                        <option value="03">Mar</option>
                        <option value="04">Apr</option>
                        <option value="05">May</option>
                        <option value="06">Jun</option>
                        <option value="07">Jul</option>
                        <option value="08">Aug</option>
                        <option value="09">Sep</option>
                        <option value="10">Oct</option>
                        <option value="11">Nov</option>
                        <option value="12">Dec</option>
            </select>
            <br/><br/>

            <button className="btn btn-info" onClick={()=>ItemReport(reportItem)}>Generate Report</button>
            <br/><br/>
            {reports.filter(filterItem).map((val, key)=>{
                return<div key={key} className="container"><table className="table">
                <thead>
                  <tr>
                    <th scope="col">Item Code</th>
                    <th scope="col">Item Name</th>
                    <th scope="col">Item Category</th>
                    <th scope="col">Item Price</th>
                    <th scope="col">Item Description</th>
                    <th scope="col">Item Date</th>
                    </tr>
                </thead>
                <tbody >
                  <tr>
                        <td valign="middle">{val.itemcode}</td>
                        <td valign="middle">{val.itemname}</td>
                        <td valign="middle">{val.category}</td>                    
                        <td valign="middle">{val.itemprice}</td>
                        <td valign="middle">{val.itemdescription}</td>
                        <td valign="middle">{val.date}</td>
                  </tr>
                  
                    
                  </tbody>
                
               
              </table><br/><br/></div>
            })}
           
        </div>
    )

}

export default GenerateItemReport;