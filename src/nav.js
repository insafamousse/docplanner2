import React from 'react';
import {Nav, NavDropdown, Navbar} from 'react-bootstrap';
import './App.css';
function Navigation(){
    return (
        <div className="Nav">       

<Navbar bg="light" expand="lg">
<Navbar.Brand href="#home"> <img class="logo-docplanner" src="https://www.docplanner.com/img/logo-default-group-en.svg?v=1" alt="Docplanner Group" width="200"></img> </Navbar.Brand>
<Navbar.Toggle aria-controls="basic-navbar-nav" />
<Navbar.Collapse id="basic-navbar-nav">
  <Nav className="mr-auto">
    <Nav.Link href="#home">  About us </Nav.Link>
    <Nav.Link href="#link">career</Nav.Link>
    <NavDropdown title="Dropdown" id="basic-nav-dropdown">
      <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
      <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
      <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
      <NavDropdown.Divider />
      <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
    </NavDropdown>
  </Nav>
  
</Navbar.Collapse>
</Navbar>
  </div>
  );
}
export default Navigation ;
