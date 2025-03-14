import React from "react";
import {
  Row,
  Col,
  Container,
  Alert,
  ListGroup,
  ListGroupItem,
  Button,
  
} from "react-bootstrap";
import { Link } from "react-router-dom";
import CartItemComponent from "../components/CartItemComponent";

const CartPage = () => {
  return (
    <div className="mt-5">
      <Container>
        <Row>
          <Col md={8}>
            <h1>Shopping Cart</h1>
            <ListGroup>
              {Array.from({ length: 3 }).map((item, idx) => (
                <>
                  <CartItemComponent /> <br />
                </>
              ))}
            </ListGroup>

            <Alert variant="info">your cart is empty</Alert>
          </Col>
          <Col md={4}>
            <ListGroup>
              <ListGroupItem>
                <h3>SubTotal (2 items)</h3>
              </ListGroupItem>
              <ListGroupItem>
                Price:<span className="fw-bold">$500</span>
              </ListGroupItem>
              <ListGroupItem>
                <Link to={'/user/order-details'}>
                  {" "}
                  <Button type="button"> Proceed to Checkout</Button>
                </Link>
              </ListGroupItem>
            </ListGroup>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default CartPage;
