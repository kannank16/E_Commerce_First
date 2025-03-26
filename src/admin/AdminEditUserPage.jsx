import React from "react";
import {
  Row,
  Col,
  Form,
  Button,
  CloseButton,
  Table,
  Alert,
  Image,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import Printer from "../assets/images/HomePage_images/Printers.jpeg";
import { useState } from "react";

const AdminEditUserPage = () => {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  const onHover = {
    cursor: "pointer",
    position: "absolute",
    left:'5px',
    top:'-10px',
    transform:'scale(2.7)'

  };
  return (
    <div>
      <Row className="mt-5 justify-content-md-center ">
        <Col md={1}>
          <Link
            to={"/admin/user"}
            className="btn btn-info my-3 text-decoration-none text-white"
          >
            {" "}
            Go Back
          </Link>

          {/* <Button></Button> */}
        </Col>
        <Col md={6}>
          <h1>Edit User</h1>
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                required
                defaultValue={"John"}
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>last Name</Form.Label>
              <Form.Control
                type="text"
                required
                defaultValue={"Peter"}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="FormBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                name="count"
                required
                defaultValue={'example@gmail.com'}
              />
            </Form.Group>
            
            <Form.Group className="mb-3" controlId="FormBasicCheck">
              <Form.Check
                type="checkbox"
                name="checkbox"
                required
                label='is admin'
              />
            </Form.Group>
              <Button type="submit" variant="primary">
                Update
              </Button>
          </Form>
        </Col>
      </Row>
    </div>
  );
};

export default AdminEditUserPage;




