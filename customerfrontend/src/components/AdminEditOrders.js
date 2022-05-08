import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { Form, Button,Navbar,Nav,NavDropdown, Modal, Table } from 'react-bootstrap';
import jsPDF from 'jspdf';
import {AppBar, Toolbar, Typography,Tab, Tabs} from "@mui/material"
 
export default function AllOrders(){
    const[Values, setValues] = useState([]);

    const[_id, setId] = useState("");
    const [itemName,setItemName] = useState("");
    const [itemCode,setItemCode] = useState("");
    const [itemColour,setItemColour] = useState("");
    const [username,setUsername] = useState("");


    const [orders, setOrders] = useState([]);
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [search, setSearch] = useState("");

    useEffect(()=>{
      function getorders(){
          axios.get("http://localhost:8070/order/readorder/",).then((res)=>{
              setOrders(res.data);
          }).catch((err)=>{
              alert(err.message)
          })
      }
      getorders();
    },[])
    
   


    const UpdateOrderDetails = (val) =>{
        console.log('test====',val)
         setValues(val);
        
        handleShow()
    }
    

    function sendData(e) {
       
        e.preventDefault();
       
        var id=null;
        var  itemName1=null;
        var itemCode1=null;
        var itemColour1=null;
        var username1=null;
        
        if (_id ===""){
            console.log('test null cond')
           // setId(Values.id)
            id=Values._id;
        }else{
            //setId(id)
            id=id
            console.log('test not null cond')

        }

        if (itemName ===""){
            console.log('test null cond')
           // setitemName(Values.itemName)
           itemName1=Values.itemName;
        }else{
            //setName(name)
            itemName1=itemName
            console.log('test not null cond')

        }
        
        if (itemCode===""){
            //setitemCode(Values.itemCode)
            itemCode1=Values.itemCode

        }else{
           // setitemCode(itemCode)
           itemCode1=itemCode
        }
        if (itemColour===""){
           // setitemColour(Values.itemColour)
           itemColour1=Values.itemColour
        }else{
            //setitemColour(itemColour)
            itemColour1=itemColour
        }

        if (username===""){
            // setusername(Values.username)
            username1=Values.username
         }else{
             //setitemColour(itemColour)
             username1=username
         }

         
 

        const UpdateOrder={
            id:Values._id,
            itemName: itemName1,
            itemCode:itemCode1,
            itemColour :itemColour1 ,
            username: username1,
        }

        console.log('form submit   =====',UpdateOrderDetails)


        axios.put(`http://localhost:8070/order/updateorder/${UpdateOrder.id}`, UpdateOrder).then(()=>{
            alert("Order Details Updated");
            handleClose();
            window.location = `/updateorder`;
            
        }).catch((err)=>{
            console.log(err);
            alert(err);
        })
    }


    //delete order
    const onDelete = (_id) => {  

        const r = window.confirm ("Delete this Order?"); 
            if(r ==true){
        axios.delete(`http://localhost:8070/order/deleteorder/${_id}`).then((response)=>{ 
        alert("Order deleted successfully");
        window.location = `/updateorder`;
      })
    }
      }
        
     

      //generate pdf
      const createPDF = (_id,itemName,itemCode,itemColour ,username) =>{

        console.log(_id);
        console.log(itemName);
        console.log(itemCode);
        console.log(itemColour);
        console.log(username);
    
    const unit = "pt";
    const size = "A4"; //page size
    const orientation = "landscape";
    const marginLeft = 40;
    const doc = new jsPDF( orientation , unit , size ); //create document
    //pdf data
    const title = `Royal lifestyle ${itemName} orders`;
     const Eitemname = `Item Name: ${itemName} `;
    const EitemCode = `Item code: ${itemCode} `;
    const Eitemcolour = `Item Colour: ${itemColour} `;
    const Eusername = `Order owner's Usename: ${username} `;
     
     
    
    doc.setFontSize( 20 );
    doc.text (150, 40,title);
    doc.text(60, 250, Eitemname);  
    doc.text(60, 300, EitemCode);  
     doc.text(60, 350,  Eitemcolour); 
     doc.text(60, 400,  Eusername);

       doc.save (`Orders-for-${username}-${itemCode}.pdf`)  //save pdf
    }
    



    return (
<div> 
        <br></br>

        <blockquote class="blockquote"><center>
   <h1 class="mb-0">Complaints and Feedbacks for Drivers</h1>
   <p class="blockquote-footer">thoughts of our Passengers....<cite title="Source Title"> </cite></p> </center>
 </blockquote>
 <Button variant="light"><a href="/readorder">Generate PDF </a></Button>{' '}

<br></br>
      <div className="App">
            Search <input type="text" placeholder="Search here by email" onChange={e =>{setSearch(e.target.value) }} />
          <br></br><br></br>

 
         <div className="adminAllEfb">

<table class ="table table-hover border shadow">
<thead class="thead-dark">
<tr>
<th>ID   </th>
<th>Item  name</th>
<th>item  Code</th>
<th> item  Colour</th>
 <th>Order owner's username</th>
<th> </th>
<th> </th>
<th> </th>
</tr>
</thead>
<tbody>
{orders.filter(Order => {
              if(search === ""){
                  return Order
              }
              else if(Order.itemName.toLowerCase().includes(search.toLowerCase())){
                return Order
            }
              
          }).map(Order=>{  //map data to table
              return(
                <tr key={Order._id}>
                <td> {Order._id} </td>
            <td>{Order.itemName}</td>
            <td>{Order.itemCode}</td>
            <td>{Order.itemColour}</td>
            <td>{Order.username}</td>
            
              <td> 
            <Button variant="warning" style={{height: 40, width: 100, marginLeft: 50}}  onClick={()=> UpdateOrderDetails(Order)}  >Update </Button>
            </td> 

            <a className="btn btn-danger" style={{height: 40, width: 100, marginLeft: 50}}  onClick={() => onDelete(Order._id)} href="/updateorder">Delete</a> {' '}  
             
                 
                <Button variant="outline-dark" style={{height: 40, width: 150, marginLeft: 50}}  onClick = {()=>createPDF(Order._id,Order.itemName,Order.itemCode,Order.itemColour,Order.username )} >Generate PDF</Button>
                

          </tr>
          
          
          );
         
          })} 

</tbody>
</table></div>

<Modal show={show} onHide={handleClose}  >
                    <Modal.Header closeButton>
                    <Modal.Title>Update Details</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>

                    <Form onSubmit={sendData}>
         

         <Form.Group controlId="container">
           <Form.Label for="itemName">Item name</Form.Label>
           <Form.Control type="text" 
           defaultValue={Values.itemName}
           onChange={(e)=>{
            setItemName(e.target.value);
          }}  />
         </Form.Group>

          

         <Form.Group controlId="container">
          <Form.Label for="itemcode">Item Code</Form.Label>
          <Form.Control type="text" 
          defaultValue={Values.itemCode}
          onChange={(e)=>{
          setItemCode(e.target.value);
          }}  />
          </Form.Group>


          <Form.Group controlId="container">
          <Form.Label for="ItemColour">Item Colour</Form.Label>
          <Form.Control type="text" 
           defaultValue={Values.itemColour}
           onChange={(e)=>{
           setItemColour(e.target.value);
           }}  />
           </Form.Group>

            
           <Form.Group controlId="container">
          <Form.Label for="username">ORDER made by</Form.Label>
          <Form.Control type="text" 
           defaultValue={Values.username}
           onChange={(e)=>{
           setUsername(e.target.value);
           }}  />
           </Form.Group>

            
    
         <Button  type="submit"> Edit details</Button> 
         <Button variant="light"><a href="/updateorder">Cancel Edit </a></Button>{' '}


         </Form>

                    </Modal.Body>
        
                </Modal>
                 <br />
                
                   <a className="btn btn-info " href="/orderhome">Back</a> {' '}  
       
 </div></div> 
  );
     
  



}

