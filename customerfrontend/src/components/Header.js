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
             
            <Navbar.Brand href="/home">Royal LifeStyle Store  🐾 </Navbar.Brand>
            <a className="nav-link" aria-current="page" href="/readf"><div class="text-secondary">Feedbacks</div></a>
            <a className="nav-link" aria-current="page" href="/adduser"><div class="text-secondary">SupplierRegistration</div></a>

            <a className="nav-link" aria-current="page" href="/ListSupplierPayment"><div class="text-secondary">ListSupplierPayment</div></a>
            <a className="nav-link" aria-current="page" href="/SupplierPaymentRegistration"><div class="text-secondary">SupplierPaymentRegistration</div></a>



            <NavDropdown title="More" id="collasible-nav-dropdown">
        <NavDropdown.Item href="/hirebus">Hire Bus</NavDropdown.Item>
        <NavDropdown.Item href="/readf">Feedbacks</NavDropdown.Item>
        <NavDropdown.Item href="/about">About us</NavDropdown.Item>
        <NavDropdown.Item href="/searchfordrivers">Drivers</NavDropdown.Item>
        <NavDropdown.Divider />
      </NavDropdown>

            <Tabs sx={{ml:"auto"}}   value={value} onChange={(e,val)=>setValue(val)} >
            <div><a href="/signin"><img style={{height: 50, width: 50, marginLeft:552}} class="rounded-circle" src="https://cdn-icons-png.flaticon.com/512/219/219983.png" href="/adduser"></img></a></div>
              <Tab LinkComponent={NavLink} to="/adduser" label='Register'/>
            </Tabs>
            </Toolbar>
            </Navbar>  </AppBar>
    </div>
  )
}

export default NavBar