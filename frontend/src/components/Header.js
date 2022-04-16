import React from "react";
//import { Form, Button,Navbar,Nav,NavDropdown} from "react-bootstrap";

function Header() {

  return (
    <nav className="navbar navbar-dark bg-dark">
      <div className="container-fluid">
    <a className="navbar-brand" href="#">Royal Lifestyle Store</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Features</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Pricing</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            More
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <li><a className="dropdown-item" href="/addStock">Add Stocks</a></li>
            <li><a className="dropdown-item" href="#">Suppliers</a></li>
            <li><a className="dropdown-item" href="#">Feedback</a></li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
  </nav>
  );
}

export default Header;