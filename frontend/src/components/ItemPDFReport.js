import React, { useState, useEffect } from "react";
import axios from "axios";
import jsPDF from "jspdf";
import "jspdf-autotable";

const GenerateOrderReport = pdfs =>{
    const doc = new jsPDF({orientation:"landscape",lineHeight:1.5});
    const tableColumns = ["item Name","Item Code","item Colour","Ordered By"];
    const tableRows = [];

    pdfs.forEach(pdf => {
        const pdfDetails=[
            
            pdf.itemName,
            pdf.itemCode,
            pdf.itemColour,
            pdf.username 
        ];
        tableRows.push(pdfDetails); 
    });

    doc.autoTable(tableColumns,tableRows,{startY:20, theme: 'grid'});
    doc.text("Orders for  Perfumes ",14,15);
    doc.save (`Orders-for perfumes.pdf`);

      

       
};

const OrderreportRender = () =>{
    const[reports,setReports]=useState([]);
    
    useEffect( () => {
        function getOrderOnItemType(){
          //http://localhost:5000/feedback/readf
            axios.get("http://localhost:8070/order/readorder/").then((res)=>{
                console.log(res.data);
                setReports(res.data);
            }).catch((err)=>{
                alert(err.message);
            })
        }
        getOrderOnItemType();
    }, []);

    
    const reportOrder = reports.filter(pdf=>pdf.itemName=="Perfume");
    const filterOrder = pdf=>pdf.itemName=="Perfume";

    return(
        <div className="container"><br/><br/>
         &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
       <a href="/adminHome">Back</a> {' '} 
       <br></br> <br></br> <br></br>  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <button className="btn btn-success" onClick={()=>GenerateOrderReport(reportOrder)}>Generate Report</button>
            <br/><br/>
           
                <div className="container">
                  <table class ="table table-hover border shadow">
                <thead class="thead-dark">
                  <tr>
                    <th scope="col">Order Number</th>
                     
                    <th scope="col">item Name</th>
                    <th scope="col">item Code</th>
                    <th scope="col">item Colour</th>
                    <th scope="col">username</th>
                   
                     
                    
                  </tr>
                </thead>
                <tbody >
                {reports.filter(filterOrder).map((val, key)=>(
                  
                  <tr>
                   
                   <th scope="row">{key +1}</th>
                    <td valign="middle">{val.itemName}</td>
                    <td valign="middle">{val.itemCode}</td>
                    <td valign="middle">{val.itemColour}</td>
                    <td valign="middle">{val.username}</td>
                    
                     
                  </tr>
                ))}
                </tbody>
                
              </table><br/><br/></div>
            
           
          
           
        </div>
    );
}       

export default OrderreportRender;
