import React from "react";
import {
  Navbar,
  Nav,
  Container,
  NavDropdown,
  InputGroup,
} from "react-bootstrap";
import Badge from "react-bootstrap/Badge";
import Form from "react-bootstrap/Form";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import Button from "react-bootstrap/Button";
import {LinkContainer } from 'react-router-bootstrap'
import "bootstrap-icons/font/bootstrap-icons.css";
import  {Link} from 'react-router-dom'

const HeaderComponent = () => {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand as={Link} to='/'>Best Online Shop</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <InputGroup>
                <DropdownButton id="dropdown-basic-button" title="All">
                  <Dropdown.Item>Books</Dropdown.Item>
                  <Dropdown.Item>Laptops</Dropdown.Item>
                  <Dropdown.Item>iphone</Dropdown.Item>
                </DropdownButton>

                <Form.Control type="text" placeholder="Search in Shop ....." />
                <Button variant="warning">
                  <i className="bi bi-search"></i>
                </Button>
              </InputGroup>
            </Nav>
            <Nav>
              <Nav.Link href="#features">Features</Nav.Link>
              <Nav.Link href="#pricing">Pricing</Nav.Link>
              <Nav.Link href="#pricing">
                <Badge bg="danger">2</Badge>cart
              </Nav.Link>
              <NavDropdown title="Dropdown" id="collapsible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default HeaderComponent;
