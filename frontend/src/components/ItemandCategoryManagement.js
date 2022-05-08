import React from "react";
import {AppBar, Toolbar, Typography,Tab, Tabs} from "@mui/material"
import { Form, Button,Navbar,Nav,NavDropdown} from "react-bootstrap";
import { NavLink } from 'react-router-dom';
import { purple } from "@mui/material/colors";

const ItemandCategoryManagement=()=>{
     return(
          
         
            <div className="fbhome">
            <br></br><br></br><br></br> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br> 
                <div>  
                    <center>
                     
                                      <h1 style={{color:'#800080'}}>ITEM AND CATEGORY MANAGEMENT</h1>  
                                      <br></br><br></br><br></br>
                    <Navbar > 
                      <Toolbar>
                    
                     
                    
                    
                     <a className="btn btn-danger btn-lg" href="/additems" style={{height: 50, width: 300, marginLeft: 250,background:'#800080'}}><i class="zmdi zmdi-info-outline"></i>Add Items</a> {' '} 
                         <a className="btn btn-danger  btn-lg" href="/allitems" style={{height: 50, width: 300, marginLeft: 150,background:'#800080'}}><i class="zmdi zmdi-info-outline"></i>View All Items</a> {' '} 
                         <a className="btn btn-danger  btn-lg" href="/newrequests" style={{height: 50, width: 300, marginLeft: 150,background:'#800080'}}><i class="zmdi zmdi-info-outline"></i>View Customer requests</a> {' '} 

                         </Toolbar>
            </Navbar>
          
        </center> 
        <br></br>  
         
    </div>
        <div >
         <center>
         <br></br> <br></br> <br></br> <br></br> <br></br> <br></br>   <br></br><br></br><br></br><br></br><br></br><br></br><br></br> 
          
            
         </center>
         </div>
    </div>
     )
}
    export default ItemandCategoryManagement  ; 