import React, {useState, useEffect} from 'react';
import axios from "axios";  //send our form data to the mock server
 

export default function AllFeedbacks(){   

    //creating states
    const[feedbackList,SetFeedbackList] = useState([]);

  const [username,setUsername] = useState("");
  const [email,setEmail] = useState("");
  const [type,setType] = useState("");
  const [contactNumber,setContactNumber] = useState("");
  const [message,setMessage] = useState("");
 

    useEffect(() =>{ //view all the feedbacks
        axios.get(`http://localhost:8070/Feedback/readf`).then((response) => { //pass response as a function
          SetFeedbackList(response.data);
        });
      }, []);

       
     //delete feedback
    const onDelete = (_id) => {  

      const r = window.confirm ("Delete this feedback?"); 
          if(r ==true){
      axios.delete(`http://localhost:8070/feedback/deletef/${_id}`).then((response)=>{ 
      alert("Feedback deleted successfully");
       
    })
  }
    }
       

    return(
        <div className="viewf"> 
      <div className="container">
<br></br>
      <blockquote class="blockquote"><center>
        <h1 class="mb-0"> Complaints and Feedbacks</h1>
        <p class="blockquote-footer">thoughts of yours<cite title="Source Title"> </cite></p></center>
      </blockquote>
      
       <br></br><br></br>
              <div className="allEfb">
                  
            <table class ="table table-hover border shadow  ">
              <thead class="table-dark">
                  <tr>
                  <th scope="col"> user ID  </th>
                      <th scope="col">Number</th> 
                      <th scope="col">Username</th> 
                     
                      <th scope="col">Type</th>
                       
                      <th scope="col">Message</th>
                      <th></th>
                       
                      </tr>
                      </thead>
              <tbody>
            {feedbackList.map((val,key) =>( //mapping data to table 
                <tr>                
                  
                <th scope="row">{key +1}</th>    
                <td>{val._id}</td>
                <td>{val.username}</td>
                
                <td>  {val.type}</td>
                 
                <td>   {val.message}</td>
                 <td> 
                <a className="btn btn-danger  " onClick={() => onDelete(val._id)} href="/readuadmin">Delete</a> {' '}  
                </td>
                </tr>
            ))}
               </tbody> </table>
                 
               </div><br></br><br></br>
               <h3 class="topi" >We would love to hear from you🖤🖤  <a className="btn btn-primary btn-lg" href="/addf"> Add Feedback</a>  </h3> 
               <br></br><br></br><br></br><br></br><br></br><br></br><br></br>
               </div></div>
               
  
                  
  );
    
}