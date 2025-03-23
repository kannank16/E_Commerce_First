import React from "react";
import {
  Container,
  Row,
  Col,
  Form,
  Alert,
  ListGroup,
  ListGroupItem,
  Button,
} from "react-bootstrap";
import CartItemComponent from "../components/CartItemComponent";

const UserOrderDetailsPage = () => {
  return (
    <div>
      <Container fluid>
        <Row className="mt-4">
          <h1 className="text-danger">Order Details</h1>
          <Col md={8}>
            <Row>
              <Col md={6}>
                <h2>Shipping</h2>
                <b>Name:</b>kannan
                <br />
                <b>address:</b>Karaikudi
                <br />
                <b>phone:</b>7558146362
                <br />
              </Col>

              <Col md={6}>
                <h2>payment method</h2>
                <Form.Select disabled={false}>
                  <option value="pp">pay pal</option>
                  <option value="cad">cash on deliver</option>
                  <option value="G_pay">google pay</option>
                </Form.Select>
              </Col>
            </Row>
            <Row>
              <Col md={6}>
                {" "}
                <Alert className="mt-3" variant="danger">
                  Not Delivered
                </Alert>
              </Col>{" "}
              <Col md={6}>
                {" "}
                <Alert className="mt-3" variant="success">
                  paid on 11-12-2025
                </Alert>
              </Col>{" "}
            </Row>
            <Row>
              <Col>
                <h1>Order items</h1>{" "}
                <ListGroup variant="flush">
                  {Array.from({ length: 3 }).map((item, idx) => (
                    <CartItemComponent />
                  ))}
                </ListGroup>
              </Col>
            </Row>
          </Col>
          <Col md={4}>
            <ListGroup>
              <ListGroupItem>
                {" "}
                <h3>order summary</h3>
              </ListGroupItem>
              <ListGroupItem>item price (after tax): <b>$1500</b></ListGroupItem>
              <ListGroupItem>Shipping: <b>included</b></ListGroupItem>
              <ListGroupItem>tax:<b>included</b></ListGroupItem>
              <ListGroupItem className="text-danger">total price:<b>$1500</b></ListGroupItem>
              <ListGroupItem>
                <div className="d-grid">
                <Button variant='danger' className="p-2 lg ">pay on the order</Button>
                  </div></ListGroupItem>
            </ListGroup>
          </Col>{" "}
        </Row>
      </Container>
    </div>
  );
};

export default UserOrderDetailsPage;
