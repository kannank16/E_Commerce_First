import React from "react";
import { ListGroupItem, Row, Col, Image, Form, Button } from "react-bootstrap";
import Games from "../assets/images/HomePage_images/Games.jpeg";

const CartItemComponent = () => {
  return (
    <div>
      <ListGroupItem>
        <Row className="p-3">
          <Col md={2}>
            <Image fluid src={Games} />
          </Col>
          <Col md={2}>
            {" "}
            PlayStation <br /> Gaming Products
          </Col>
          <Col md={2}>
            {" "}
            Price <br /> <span className="fw-bold">$500</span>{" "}
          </Col>
          <Col md={3}>
            <Form.Select className="mt-3">
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
            </Form.Select>
          </Col>
          <Col md={3}>
            <Button className="mt-3 ms-5" type="button" variant="secondary" onClick={()=>{
                window.confirm('are you sure ?')
            }}>
              {" "}
              <i className="bi bi-trash"> </i>
            </Button>
          </Col>
        </Row>
      </ListGroupItem>
    </div>
  );
};

export default CartItemComponent;
