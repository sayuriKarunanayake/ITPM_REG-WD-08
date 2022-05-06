import React, { useState, useEffect } from "react";
import axios from "axios";
import jsPDF from "jspdf";
import "jspdf-autotable";

const GenerateStockReport = reports => {
 const doc = new jsPDF({orientation:"landscape",lineHeight:1.5});
 const tableColumns = ["Stock Code","Category","Manufacturer","Supplier","Model Name","Unit Price(Rs.)","Specifications","Received Date","Qty.","Status"];
 const tableRows = [];

 reports.forEach(report => {
     const reportData = [
        report.stockCode,
        report.category,
        report.manufacturer,
        report.supplier,
        report.modelName,
        report.unitPrice,
        report.specifications,
        report.receivedDate,
        report.qty,
        report.status_avail
     ];
     tableRows.push(reportData); 
 });
 doc.autoTable(tableColumns,tableRows,{startY:20});
 doc.text("Stocks Received within a month",14,15);
 doc.save(`Stock_MonthlyReport.pdf`);

};

const StockReport = () => {
    const[reports,setReports]=useState([]);
    const[getmonth,setgetmonth]=useState(0);

    useEffect( () => {
        function getStocksOnMonth(){
          
            axios.get("http://localhost:8070/stock/getallstock").then((res)=>{
                console.log(res.data);
                setReports(res.data);
            }).catch((err)=>{
                alert(err.message);
            })
        }
        getStocksOnMonth();
    }, []);

    const reportStock = reports.filter(report=>report.receivedDate.substring(5, 7)==getmonth);
    const filterStock = report=>report.receivedDate.substring(5, 7)==getmonth;

    return(
        <div className="container"><br/><br/>
           <select className="form-select form-controlEmp" id="month" onChange={(e)=>{
                        setgetmonth(e.target.value);//updating state using value taken from the form 
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

            <button className="btn btn-info" onClick={()=>GenerateStockReport(reportStock)}>Generate Report</button>
            <br/><br/>
            {reports.filter(filterStock).map((val, key)=>{
                return<div key={key} className="container"><table className="table">
                <thead>
                  <tr>
                    <th scope="col">Stock Code</th>
                    <th scope="col">Category</th>
                    <th scope="col">Model Name</th>
                    <th scope="col">Unit Price</th>
                    <th scope="col">Qty.</th>
                    <th scope="col">Status</th>
                    
                  </tr>
                </thead>
                <tbody >
                  <tr>
                    <th valign="middle" scope="row">
                      <a href={`/fetchStock/${val.stockCode}`} style={{textDecoration:'none'}}>
                      {val.stockCode}
                      </a>
                      </th>
                        <td valign="middle">{val.category}</td>
                        <td valign="middle">{val.modelName}</td>
                        <td valign="middle">Rs.{val.unitPrice}</td>                    
                        <td valign="middle">{val.qty}</td>
                        <td valign="middle">{val.status_avail}</td>
                  </tr>
                  
                </tbody>
              </table><br/><br/></div>
            })}
           
        </div>
    )

}

export default StockReport;