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
            <a className="nav-link" aria-current="page" href="/readf"><div class="text-secondary">Feedbacks</div></a>
            <a className="nav-link" aria-current="page" href="/adduser"><div class="text-secondary">SupplierRegistration</div></a>

            <a className="nav-link" aria-current="page" href="/ListSupplierPayment"><div class="text-secondary">ListSupplierPayment</div></a>
            <a className="nav-link" aria-current="page" href="/Supplier_Home"><div class="text-secondary">SUPPLIER MANAGEMENT</div></a>

            <a className="nav-link" aria-current="page" href="/stockHome"><div class="text-secondary">Stocks</div></a>



            <NavDropdown title="More" id="collasible-nav-dropdown">
        <NavDropdown.Item href="/">Staff Login</NavDropdown.Item>
        <NavDropdown.Item href="/cusPay">Customer Payments</NavDropdown.Item>
        <NavDropdown.Item href="/addcuspay">Add cutomer Payment</NavDropdown.Item>
        <NavDropdown.Item href="/allstaff">All staff</NavDropdown.Item>
        <NavDropdown.Divider />
      </NavDropdown>

    
            </Toolbar>
            </Navbar>  </AppBar>
    </div>
  )
}

export default Header;