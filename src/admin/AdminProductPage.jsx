import React from "react";
import { Row, Col, Table, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import AdminLinkComponent from "../components/admin/AdminLinkComponent";

const AdminProductPage = () => {
  const handleDelete=()=>{
    if(window.confirm('are you sure ?')) alert('product deleted')
  }
  return (
    <div>
      <Row className="m-5">
        <Col md={2}>
          <AdminLinkComponent />
        </Col>
        <Col md={10}>
          <h1>
            Products list
            {"  "}
            <Button
              variant="primary"
              size="lg"
              as={Link}
              to={"/admin/create-product"}
            >
              Create New
            </Button>
          </h1>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>S.No</th>
                <th>Product Name </th>
                <th>Price</th>
                <th>Category</th>
                <th>Edit/Delete</th>
              </tr>
            </thead>
            <tbody>
              {[
                { name: "panasonic", price: "190$", category: "Tv" },
                { name: "dell", price: "120$", category: "Laptop" },
                { name: "Gta-5", price: "50$", category: "Games" },
              ].map((item, idx) => (
                <tr key={idx}>
                  <td>{idx + 1}</td>
                  <td>{item.name}</td>
                  <td>{item.price}</td>
                  <td>{item.category}</td>
                  <td>
                    <Button variant="primary" size="small" as={Link} to={'/admin/edit-product'}>
                    <i className="bi bi-pencil-square" ></i>

                    </Button> {" / "}
                    
                    <Button variant="danger" size="small" onClick={handleDelete}>

                    <i className="bi bi-x-circle"></i>

                    </Button> 
                  </td>
                  
                </tr>
              ))}
            </tbody>
          </Table>
        </Col>
      </Row>
    </div>
  );
};

export default AdminProductPage;
