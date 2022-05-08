import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { Button,Modal,Form,Table } from 'react-bootstrap';
import jsPDF from 'jspdf';
 
 
 
export default function AllDelivery(){
    const[Values, setValues] = useState([]);

    const[_id, setId] = useState("");
    const [username,setUsername] = useState("");
    const [contactNumber,setContactNumber] = useState("");
    const [email,setEmail] = useState("");
    const [homeno,setHomeno] = useState("");
    const [street,setStreet] = useState("");
    const [city,setCity] = useState("");
    const [province,setProvince] = useState("");
    const [deliveryTime,setDeliveryTime] = useState("");
   
    const [deliveries, setDeliveries] = useState([]);
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [search, setSearch] = useState("");

    useEffect(()=>{
      function getdelivery(){
          axios.get("http://localhost:8070/delivery/readdelivery/",).then((res)=>{
              setDeliveries(res.data);
          }).catch((err)=>{
              alert(err.message)
          })
      }
      getdelivery();
    },[])
    
   


    const UpdateDeliveryDetails = (val) =>{
        console.log('test====',val)
         setValues(val);
        
        handleShow()
    }
    

    function sendData(e) {
       
        e.preventDefault();
       
        var id=null;
        var  username1=null;
        var contactNumber1=null;
        var email1=null;
        var homeno1=null;
        var  street1=null;
        var city1=null;
        var province1=null;
        var deliveryTime1=null;

        //username,contactNumber,email,homeno,street,city,province, deliveryTime
        
        if (_id ===""){
            console.log('test null cond')
           // setId(Values.id)
            id=Values._id;
        }else{
            //setId(id)
            id=id
            console.log('test not null cond')

        }

        if (username ===""){
            console.log('test null cond')
           // setusername(Values.username)
           username1=Values.username;
        }else{
            //setName(name)
            username1=username
            console.log('test not null cond')

        }
        
        if (contactNumber===""){
            //setcontactNumber(Values.contactNumber)
            contactNumber1=Values.contactNumber

        }else{
           // setcontactNumber(contactNumber)
           contactNumber1=contactNumber
        }
        if (email===""){
           // setemail(Values.email)
           email1=Values.email
        }else{
            //setemail(email)
            email1=email
        }

        if (homeno===""){
            // sethomeno(Values.homeno)
            homeno1=Values.homeno
         }else{
             //sethomeno(homeno)
             homeno1=homeno
         }

         if (street===""){
            // setstreet(Values.street)
            street1=Values.street
         }else{
             //sethstreet(street)
             street1=street
         }

         if (city===""){
            // setcity(Values.city)
            city1=Values.city
         }else{
             //setcity(city)
             city1=city
         }

         if (province===""){
            // setprovince(Values.province)
            province1=Values.province
         }else{
             //setprovince(province)
             province1=province
         }

         if (deliveryTime===""){
            // setcity(Values.deliveryTime)
            deliveryTime1=Values.deliveryTime
         }else{
             //setdeliveryTime(deliveryTime)
             deliveryTime1=deliveryTime
         }
          
 

        const UpdateDelivery={
            id:Values._id,
            username:username1,
            contactNumber:contactNumber1,
            email :email1 ,
            homeno: homeno1,
            street:street1,
            city:city1,
            province :province1 ,
            deliveryTime: deliveryTime1,
        }

        console.log('form submit   =====',UpdateDeliveryDetails)


        axios.put(`http://localhost:8070/delivery/updatedelivery/${UpdateDelivery.id}`, UpdateDelivery).then(()=>{
            alert("Delivery Details Updated");
            handleClose();
            window.location = `/updatedelivery`;
            
        }).catch((err)=>{
            console.log(err);
            alert(err);
        })
    }


    //delete delivery
    const onDelete = (_id) => {  

        const r = window.confirm ("Delete this Delivery?"); 
            if(r ==true){
        axios.delete(`http://localhost:8070/delivery/deletedelivery/${_id}`).then((response)=>{ 
        alert("Delivery deleted successfully");
        window.location = `/updatedelivery`;
      })
    }
      }
        
     

      //generate pdf
      const createPDF = (_id,username,contactNumber,email,homeno,street,city,province,deliveryTime) =>{

        console.log(_id);
        console.log(username);
        console.log(contactNumber);
        console.log(email);
        console.log(homeno);
        console.log(street);
        console.log(city);
        console.log(province);
        console.log(deliveryTime);
         

    const unit = "pt";
    const size = "A4"; //page size
    const orientation = "landscape";
    const marginLeft = 40;
    const doc = new jsPDF( orientation , unit , size ); //create document
    //pdf data
    const title = `Royal lifestyle ${username} orders`;
     const Eusername = `username: ${username} `;
    const EcontactNumber = `contactNumber: ${contactNumber} `;
    const Eemail = `email: ${email} `;
    const Ehomeno = `homeno: ${homeno} `;
    const Estreet = `street: ${street} `;
    const Ecity = `city: ${city} `;
    const Eprovince = `province: ${province} `;
    const EdeliveryTime = `deliveryTime: ${deliveryTime} `;
     
   
    
    doc.setFontSize( 20 );
    doc.text (150, 40,title);
     
    doc.text(60, 250, Eusername);  
     doc.text(60, 300,  EcontactNumber); 
     doc.text(60, 350,  Eemail);
     doc.text(60, 400, Ehomeno);  
     doc.text(60, 450, Estreet);  
    doc.text(60, 500,  Ecity);  
     doc.text(60, 550,  Eprovince); 
     doc.text(60, 600,  EdeliveryTime);

       doc.save (`Delivery-for-${username}.pdf`)  //save pdf
    }
    



    return (
<div> 
        <br></br>

        <blockquote class="blockquote"><center>
   <h1 class="mb-0">Complaints and Feedbacks for Drivers</h1>
   <p class="blockquote-footer">thoughts of our Passengers....<cite title="Source Title"> </cite></p> </center>
 </blockquote>

<br></br>
      <div className="App">
            Search <input type="text" placeholder="Search here by email" onChange={e =>{setSearch(e.target.value) }} />
          <br></br><br></br>

 
         <div className="adminAllEfb">

<table class ="table table-hover border shadow">
<thead class="thead-dark">
<tr>          
  <th>ID</th> 
<th>username</th>
<th>contactNumber</th>
<th>email</th>
 
 <th>homeno</th>
 <th>street</th>
<th>city</th>
<th>province</th>
<th>preferred delivery Time</th>
<th> </th>
</tr>
</thead>
<tbody>
{deliveries.filter(Delivery => {
              if(search === ""){
                  return Delivery
              }
            
            else if(Delivery.email.toLowerCase().includes(search.toLowerCase())){
                return Delivery
            }
              
          }).map(Delivery=>{  //map data to table
              return(
                <tr key={Delivery._id}>
                <td> {Delivery._id} </td>
            <td>{Delivery.username}</td>
            <td>{Delivery.contactNumber}</td>
            <td>{Delivery.email}</td>
            <td>{Delivery.homeno}</td>
            <td>{Delivery.street}</td>
            <td>{Delivery.city}</td>
            <td>{Delivery.province}</td>
            <td>{Delivery.deliveryTime}</td>

            
            <Button variant="warning" style={{height: 40, width: 100, marginLeft: 30}} onClick={()=> UpdateDeliveryDetails(Delivery)}  >Update </Button>
            

            <a className="btn btn-danger  " style={{height: 40, width: 100, marginLeft: 30}} onClick={() => onDelete(Delivery._id)} href="/updatedelivery">Delete</a> {' '}  
       
                 
                <Button variant="outline-dark" style={{height: 40, width: 150, marginLeft: 30}} onClick = {()=>createPDF(Delivery._id,Delivery.username,Delivery.contactNumber,Delivery.email,Delivery.homeno,Delivery.street,Delivery.city,Delivery.province, Delivery.deliveryTime )} >Generate PDF</Button>


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
           <Form.Label for="username">username</Form.Label>
           <Form.Control type="text" 
           defaultValue={Values.username}
           onChange={(e)=>{
            setUsername(e.target.value);
          }}  />
         </Form.Group>

         <Form.Group controlId="container">
           <Form.Label for="contactNumber">contactNumber</Form.Label>
           <Form.Control type="text" 
           defaultValue={Values.contactNumber}
           onChange={(e)=>{
            setContactNumber(e.target.value);
          }}  />
         </Form.Group>

         <Form.Group controlId="container">
           <Form.Label for="email">email</Form.Label>
           <Form.Control type="text" 
           defaultValue={Values.email}
           onChange={(e)=>{
            setEmail(e.target.value);
          }}  />
         </Form.Group>

         <Form.Group controlId="container">
           <Form.Label for="homeno">homeno</Form.Label>
           <Form.Control type="text" 
           defaultValue={Values.homeno}
           onChange={(e)=>{
            setHomeno(e.target.value);
          }}  />
         </Form.Group>

         <Form.Group controlId="container">
           <Form.Label for="street">street</Form.Label>
           <Form.Control type="text" 
           defaultValue={Values.street}
           onChange={(e)=>{
            setStreet(e.target.value);
          }}  />
         </Form.Group>

         <Form.Group controlId="container">
           <Form.Label for="city">city</Form.Label>
           <Form.Control type="text" 
           defaultValue={Values.city}
           onChange={(e)=>{
            setCity(e.target.value);
          }}  />
         </Form.Group>

         <Form.Group controlId="container">
           <Form.Label for="province">province</Form.Label>
           <Form.Control type="text" 
           defaultValue={Values.province}
           onChange={(e)=>{
            setProvince(e.target.value);
          }}  />
         </Form.Group>

         <Form.Group controlId="container">
           <Form.Label for="deliveryTimey">delivery Time</Form.Label>
           <Form.Control type="text" 
           defaultValue={Values.deliveryTime}
           onChange={(e)=>{
            setDeliveryTime(e.target.value);
          }}  />
         </Form.Group>
        
         //username,contactNumber,email,homeno,street,city,province, deliveryTime
   
          
  
         <Button  type="submit"> Edit details</Button> 
         <Button variant="light"><a href="/updatdelivery">Cancel Edit </a></Button>{' '}


         </Form>

                    </Modal.Body>
        
                </Modal>
                 <br />
                
                   <a className="btn btn-info " href="/orderhome">Back</a> {' '}  
       
 </div></div> 
  );
     
  



}

