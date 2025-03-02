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
import { LinkContainer } from "react-router-bootstrap";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Link } from "react-router-dom";

const HeaderComponent = () => {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand as={Link} to="/">
            Madhu Online Shop
          </Navbar.Brand>
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
              <Nav.Link as={Link} to="/admin/orders">
                Admin
              </Nav.Link>
              <Nav.Link as={Link} to="/login">
                login
              </Nav.Link>
              <Nav.Link as={Link} to="/register">
                Register
              </Nav.Link>
              <Nav.Link as={Link} to={"/cart"}>
                <Badge bg="danger ">2</Badge>
                <i className="bi bi-cart4 me-1"></i>Cart
              </Nav.Link>

              <NavDropdown title="kannan" id="collapsible-nav-dropdown">
                <NavDropdown.Item
                  eventKey={"/user/my-order"}
                  as={Link}
                  to="/user/my-order"
                >
                  my orders
                </NavDropdown.Item>
                <NavDropdown.Item
                  eventKey={"/user/profile"}
                  as={Link}
                  to="/user/profile"
                >
                  my profile
                </NavDropdown.Item>
                <NavDropdown.Item eventKey={"/"} as={Link} to="/">
                  logout
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
