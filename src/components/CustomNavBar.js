import React, { Component } from 'react'
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';

class CustomNavBar extends Component{
  render(){
    return(
        <Navbar collapseOnSelect bg="light" expand="lg">
            <Navbar.Brand>
              <Link to="/">Coral Bell Photography</Link>
            </Navbar.Brand>
            <Navbar.Toggle/>

            <Navbar.Collapse>
              <Nav>
                <LinkContainer exact to="/">
                  <Nav.Link href="/">Home</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/stuff">
                  <Nav.Link href="/stuff">Stuff</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/contact">
                  <Nav.Link href="/contact">Contact</Nav.Link>
                </LinkContainer>
              </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
  }
}

export default CustomNavBar;
