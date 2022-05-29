import React, { useState } from 'react'
import {AppBar, Toolbar, Typography,Tab, Tabs} from "@mui/material"
import { NavLink } from 'react-router-dom';
import { Form, Button,Navbar,Nav,NavDropdown} from "react-bootstrap";


//import LibraryBooksOutlinedIcon from '@mui/icons-material/LibraryBooksOutlined';

const Header = () => {
    const [value, setValue] =useState(  ); 
  return (
    <div>
        <AppBar sx={{backgroundColor:"#ffff", width:"auto", ml:"auto"}} position='sticky'>
        <Navbar className="navbar1" collapseOnSelect expand="lg" bg="bg-*purple" variant="light"> 
          <Toolbar>
            <div class="text-secondary">
               
            </div> 
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
             
            <Navbar.Brand href="/home">Royal LifeStyle Store  🐾 </Navbar.Brand>
      


        

        <Tabs sx={{ml:"auto"}}   value={value} onChange={(e,val)=>setValue(val)} >
            <div><a href="/"><img style={{height: 50, width: 50, marginLeft:552}} class="rounded-circle" src="https://cdn-icons-png.flaticon.com/512/219/219983.png" href="/adduser"></img></a></div>
            <Tab LinkComponent={NavLink} to="/" label=''/>
        </Tabs>
    
            </Toolbar>
            </Navbar>  </AppBar>
    </div>
  )
}

export default Header;