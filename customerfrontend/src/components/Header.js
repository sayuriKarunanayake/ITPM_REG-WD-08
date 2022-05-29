import React, { useState } from 'react'
import {AppBar, Toolbar, Typography,Tab, Tabs} from "@mui/material"
import { NavLink } from 'react-router-dom';
import { Form, Button,Navbar,Nav,NavDropdown} from "react-bootstrap";


//import LibraryBooksOutlinedIcon from '@mui/icons-material/LibraryBooksOutlined';

const NavBar = () => {
    const [value, setValue] =useState(  ); 
  return (
    <div>
        <AppBar sx={{backgroundColor:"#ffff", width:"auto", ml:"auto"}} position='sticky'>
        <Navbar className="navbar1" collapseOnSelect expand="lg" bg="bg-*purple" variant="light"> 
          <Toolbar>
            <div class="text-secondary">
               
            </div> 
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
             
            <Navbar.Brand href="/">Royal LifeStyle Store  🐾 </Navbar.Brand>
            <a className="nav-link" aria-current="page" href="/readf"><div class="text-secondary">Feedbacks</div></a>
            <a className="nav-link" aria-current="page" href="/addorder"><div class="text-secondary">Buy Now</div></a>

             <a className="nav-link" aria-current="page" href="/vnewrequests "><div class="text-secondary">Customer New Requests</div></a>
            
             &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
             &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;


            <Tabs sx={{ml:"auto"}}   value={value} onChange={(e,val)=>setValue(val)} >
            <div><a href="/signin"><img style={{height: 50, width: 50, marginLeft:552}} class="rounded-circle" src="https://cdn-icons-png.flaticon.com/512/219/219983.png" href="/adduser"></img></a></div>
              
            </Tabs>
            </Toolbar>
            </Navbar>  </AppBar>
    </div>
  )
}

export default NavBar