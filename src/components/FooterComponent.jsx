import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const FooterComponent = () => {
  return (
    <footer>
      <Container fluid className="mt-5">
      <Row>
        <Col className="bg-dark text-white text-center py-5">copyright &copy; best online shop</Col>
      </Row>
    </Container>
    </footer>
  );
};

export default FooterComponent;
