import React from "react";
import { Nav, NavLink, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const AdminLinkComponent = () => {
  return (
    <div>
      <Navbar className="bg-light " variant="light">
        <Nav className="flex-column">
          <NavLink as={Link} to="/admin/orders">
            orders
          </NavLink>

          
            {" "}
            <NavLink as={Link} to={"/admin/product"}>Products</NavLink>
          
          
            {" "}
            <NavLink as={Link} to={"/admin/user"}>users</NavLink>
          
          
            {" "}
            <NavLink as={Link} to={"/admin/chat"}>Chats</NavLink>
          
          
            {" "}
            <NavLink as={Link} to={"/admin/analytics"}>Analytics</NavLink>
          
        </Nav>
      </Navbar>
    </div>
  );
};

export default AdminLinkComponent;
