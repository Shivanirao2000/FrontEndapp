import React, { Component } from 'react';
import '../App.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import LOGO from '../iconComponents/Logo';


export default class Navbar1 extends Component {
    render() {
        return (
          <div className="menu-bar">
            
            <Navbar expand="md" variant="dark">
            <Navbar.Brand href="#home">
              <div className="circle"><LOGO/></div>
            
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              
              <Nav className="ml-auto navItem">
              
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#link">About</Nav.Link>
                <Nav.Link href="#contact">Contact us  |  <i class="fas fa-phone-alt"></i>  999 999 9999</Nav.Link>
              
              </Nav>
              
            </Navbar.Collapse>
            </Navbar>
            
            </div>
        )
    }
}
