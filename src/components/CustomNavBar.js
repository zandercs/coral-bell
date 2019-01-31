import React, { Component } from 'react'
import { Navbar, Nav, NavItem, NavDropdown } from 'react-bootstrap';
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
                <NavDropdown title="Photos">
                  <LinkContainer to="/architecture-travel">
                    <NavDropdown.Item href="/architecture-travel">Architecture &amp; Travel</NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to="/commercial">
                    <NavDropdown.Item href="/commercial">Commercial</NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to="/engagement-wedding">
                    <NavDropdown.Item href="/engagement-wedding">Engagements &amp; Weddings</NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to="/family">
                    <NavDropdown.Item href="/family">Family</NavDropdown.Item>
                  </LinkContainer>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
            <Navbar.Collapse className="justify-content-end">
              <Nav>
                <LinkContainer to="/contact">
                  <Nav.Link className="btn btn-link btn-info" href="/contact">Contact</Nav.Link>
                </LinkContainer>
              </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
  }
}

export default CustomNavBar;
