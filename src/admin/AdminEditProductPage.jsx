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

const AdminEditProductPage = () => {
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
            to={"/admin/product"}
            className="btn btn-info my-3 text-decoration-none text-white"
          >
            {" "}
            Go Back
          </Link>

          {/* <Button></Button> */}
        </Col>
        <Col md={6}>
          <h1>Edit Product</h1>
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                required
                defaultValue={"panasonic"}
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                required
                defaultValue={"product description"}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="FormBasicCount">
              <Form.Label>Count in Stock</Form.Label>
              <Form.Control
                type="number"
                name="count"
                required
                defaultValue={3}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="FormBasisPrice">
              <Form.Label>Price</Form.Label>
              <Form.Control type="text" name="price" required />
            </Form.Group>

            <Form.Group className="mb-3" controlId="FormBasisPrice">
              <Form.Label>
                category{"  "}
                <CloseButton /> <small>(remove selected)</small>
              </Form.Label>
              <Form.Select aria-label="Default select example" required>
                <option>Choose one Category</option>
                <option value="1">Laptops</option>
                <option value="2">Tv</option>
                <option value="3">Games</option>
              </Form.Select>
            </Form.Group>

            <Row>
              <Col md={6}>
                <Form.Group className="mb-3" controlId="FormBasisAttribute">
                  <Form.Label>Choose new attribute</Form.Label>
                  <Form.Select aria-label="Default select example" required>
                    <option>Choose attribute </option>
                    <option value="1">color</option>
                  </Form.Select>
                </Form.Group>
              </Col>
              <Col md={6}>
                {" "}
                <Form.Group className="mb-3" controlId="FormBasisPrice">
                  <Form.Label>Choose Attribute Value{"  "}</Form.Label>
                  <Form.Select aria-label="Default select example" required>
                    <option>Choose value</option>
                    <option value="1">green</option>
                    <option value="2">blue</option>
                    <option value="3">red</option>
                  </Form.Select>
                </Form.Group>
              </Col>
            </Row>
            <Table>
              <thead>
                <tr>
                  <th>Attribute</th>
                  <th>Value</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>attrkey</td>
                  <td>value</td>
                  <td>
                    <CloseButton></CloseButton>
                  </td>
                </tr>
              </tbody>
            </Table>
            <Row>
              <Col md={6}>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>Choose New Attribute</Form.Label>
                  <Form.Control
                    type="text"
                    name="name"
                    required
                    placeholder="first choose or create category"
                  />
                </Form.Group>
              </Col>
              <Col md={6}>
                {" "}
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>choose new attribute value</Form.Label>
                  <Form.Control
                    type="text"
                    name="name"
                    required
                    placeholder="first choice or create category"
                  />
                </Form.Group>
              </Col>
            </Row>
            <Alert variant="info">
              After Typing Attribute key and Value press on enter field
            </Alert>
            <Form.Group controlId="formFile" className="mb-3 mt-3">
              <Form.Label>Images</Form.Label>
              <Row>
                <Col xs={3} style={{position:"relative"}}>
                  <Image src={Printer} fluid></Image>
                  <i className="bi bi-x text-danger " style={onHover}></i>
                </Col><Col xs={3} style={{position:"relative"}}>
                  <Image src={Printer} fluid></Image>
                  <i className="bi bi-x text-danger " style={onHover}></i>
                </Col>
              </Row>{" "}
              <Form.Control type="file" required />
            </Form.Group>

            <Form.Group controlId="formFile" className="mb-3 ">
              <Button type="submit" variant="primary">
                Update
              </Button>
            </Form.Group>
          </Form>
        </Col>
      </Row>
    </div>
  );
};

export default AdminEditProductPage;
