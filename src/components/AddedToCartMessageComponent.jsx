import React from "react";
import { useState } from "react";
import Alert from "react-bootstrap/Alert";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
// import Button from 'react-bootstrap/Button';

const AddedToCartMessageComponent = () => {
  const [show, setShow] = useState(true);

  return (
    <Alert
      show={show}
      variant="danger"
      onClose={() => setShow(false)}
      dismissible
    >
      <Alert.Heading>Product Was Added TO Your Cart</Alert.Heading>
      <p>
        <Button variant="success"> Go Back</Button>{" "}
        <Link to="/cart">
          <Button variant="danger"> Go To Cart</Button>
        </Link>
      </p>
    </Alert>
  );
};

export default AddedToCartMessageComponent;
