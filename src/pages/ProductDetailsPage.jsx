import React, { useEffect } from "react";
import { Row, Col, Container, Image, Alert } from "react-bootstrap";
import Camera from "../assets/images/HomePage_images/Camera .jpeg";
import Printer from "../assets/images/HomePage_images/Printers.jpeg";
import Tablets from "../assets/images/HomePage_images/Tablets.jpeg";
import AddedToCartMessageComponent from "../components/AddedToCartMessageComponent";
import ListGroup from "react-bootstrap/ListGroup";
import { Rating } from "react-simple-star-rating";
import Form from "react-bootstrap/Form";
import { Button } from "react-bootstrap";
import ImageZoom from "js-image-zoom";

const ProductDetailsPage = () => {
  var options = {
    width: 800,
    zoomWidth: 600,
    offset: { vertical: 0, horizontal: 10 },
  };
  useEffect(() => {
    new ImageZoom(document.getElementById("first"), options);
    new ImageZoom(document.getElementById("second"), options);
    new ImageZoom(document.getElementById("third"), options);
  }, []);
  return (
    <div>
      <Container>
        <AddedToCartMessageComponent />

        <Row className="mt-5">
          <Col md={4} style={{ zIndex: 1 }}>
            <div id="first">
              <Image src={Camera} fluid />
            </div>
            <br />
            <div id="second">
              <Image src={Printer} fluid />
            </div>
            <br />
            <div id="third">
              <Image src={Tablets} fluid />
            </div>
          </Col>
          <Col md={8}>
            <Row>
              <Col md={8}>
                <ListGroup variant="flush">
                  <ListGroup.Item>
                    {" "}
                    <h4>Product Name</h4>{" "}
                  </ListGroup.Item>

                  <ListGroup.Item>
                    <Rating initialValue={3} size={20} />
                    (1)
                  </ListGroup.Item>
                  <ListGroup.Item>
                    Price: <span className="fw-bold">600$</span>
                  </ListGroup.Item>
                  <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
                </ListGroup>
              </Col>
              <Col md={4}>
                <ListGroup>
                  <ListGroup.Item>status : in stock</ListGroup.Item>
                  <ListGroup.Item>
                    {" "}
                    Price:<span className="fw-bold">600$</span>{" "}
                  </ListGroup.Item>

                  <ListGroup.Item>
                    Quantity
                    <Form.Select lg={5} aria-label="Default select example">
                      <option>1</option>
                      <option value="1">2</option>
                      <option value="2">3</option>
                      <option value="3">4</option>
                    </Form.Select>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <Button variant="danger">Add to Cart</Button>
                  </ListGroup.Item>
                </ListGroup>{" "}
              </Col>
            </Row>
            <Row>
              <Col className="mt-5">
                <h5>Review</h5>{" "}
              </Col>
              <hr />
              {Array.from({ length: 5 }).map((item, idx) => (
                <ListGroup.Item>
                  john <br />
                  <Rating initialValue={4} size={20} />
                  <br />
                  11-03-2025
                  <br />
                  the product is very good
                  <hr />
                </ListGroup.Item>
              ))}
              send a Review form
              <Alert variant="danger">Login to send a Review</Alert>
              <Form>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>Write A Review</Form.Label>
                  <Form.Control as="textarea" rows={3} />
                </Form.Group>
                <Form.Select lg={5} aria-label="Default select example">
                  <option>Rating</option>

                  <option value="5">5 (Excellent)</option>
                  <option value="4">4 (Very Good)</option>
                  <option value="3">3(Good)</option>
                  <option value="2">4(Average)</option>
                  <option value="1">5(Bad)</option>
                </Form.Select>
                <Button variant="primary" className="my-3">
                  Submit
                </Button>
              </Form>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ProductDetailsPage;
