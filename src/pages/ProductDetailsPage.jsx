import React from "react";
import { Row, Col, Container, Image, Alert } from "react-bootstrap";
import Camera from "../assets/images/HomePage_images/Camera .jpeg";
import Printer from "../assets/images/HomePage_images/Printers.jpeg";
import Tablets from "../assets/images/HomePage_images/Tablets.jpeg";
import AddedToCartMessageComponent from "../components/AddedToCartMessageComponent";
import ListGroup from "react-bootstrap/ListGroup";
import { Rating } from "react-simple-star-rating";
import Form from "react-bootstrap/Form";
import { Button } from "react-bootstrap";

// import { useParams } from "react-router-dom";

const ProductDetailsPage = () => {
  return (
    <div>
      <Container>
        <AddedToCartMessageComponent />

        <Row className="mt-5">
          <Col md={4}>
            <Image src={Camera} fluid />
            <Image src={Printer} fluid />

            <Image src={Tablets} fluid />
          </Col>
          <Col md={8}>
            <Row>
              <Col md={8}>
                <ListGroup variant="flush">
                  <ListGroup.Item>Cras justo odio</ListGroup.Item>
                  <ListGroup.Item>
                    <Rating initialValue={3} size={20} />
                    (1)
                  </ListGroup.Item>
                  <ListGroup.Item>Morbi leo risus</ListGroup.Item>
                  <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
                </ListGroup>
              </Col>
              <Col md={4}>
                <ListGroup>
                  <ListGroup.Item>Cras justo odio</ListGroup.Item>
                  <ListGroup.Item>
                    <Form.Select lg={5} aria-label="Default select example">
                      <option>Open this select menu</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </Form.Select>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <Button variant="danger">danger</Button>
                  </ListGroup.Item>
                  <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
                  <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
                </ListGroup>{" "}
              </Col>
            </Row>
            <Row>
              <Col className="mt-5">
                <h5>Review</h5>{" "}
              </Col>
              <hr />
              send a Review form
              <Alert variant="danger">
                  Login to send a Review
              </Alert>
              <Form>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" placeholder="name@example.com" />
                </Form.Group>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlTextarea1"
                >
                  <Form.Label>Example textarea</Form.Label>
                  <Form.Control as="textarea" rows={3} />
                </Form.Group>
                <Form.Select lg={5} aria-label="Default select example">
                  <option>Open this select menu</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </Form.Select>
                <Button variant="primary">primary</Button>
              </Form>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ProductDetailsPage;
