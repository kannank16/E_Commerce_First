import React from "react";
import {
  Container,
  Row,
  Col,
  Form,
  Button,
  Spinner,
  Alert,
} from "react-bootstrap";
import { useState } from "react";
import { Link } from "react-router-dom";

const RegisterPage = () => {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  const onChange = () => {
    const password = document.querySelector('input[name="password"]');
    const confirmPassword = document.querySelector('input[name="confirmPassword"]');
    if(confirmPassword.value===password.value){
      confirmPassword.setCustomValidity('')
    }
    else{
      confirmPassword.setCustomValidity('password do not match')
    }
  };

  return (
    <div>
      <Container>
        <Row className="mt-5 justify-content-md-center">
          <Col md={6}>
            <h1>Register</h1>
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
              <Form.Group
                as={Col}
                controlId="validationCustom01"
                className="mb-4"
              >
                <Form.Label> Your name</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="Enter Your name"
                  // defaultValue="Mark"
                />
                <Form.Control.Feedback type="invalid">
                  Please Enter Your Name
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group
                as={Col}
                controlId="formBasicLastName"
                className="mb-4"
              >
                <Form.Label> Last name</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="Enter Your Last name"
                  // defaultValue="Mark"
                />
                <Form.Control.Feedback type="invalid">
                  Please Enter Your Last Name
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} controlId="FormBasicEmail" className="mb-4">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  required
                  type="email"
                  placeholder="Enter Your Email Address"
                  // defaultValue="Mark"
                />
                <Form.Control.Feedback type="invalid">
                  Please Enter Your valid Email
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group
                as={Col}
                controlId="FormBasicPassword"
                className="mb-4"
              >
                <Form.Label>PassWord</Form.Label>
                <Form.Control
                  required
                  type="Password"
                  name="password"
                  placeholder="Enter Your Password"
                  minLength={8}
                  onChange={onChange}
                  // defaultValue="Mark"
                />
                <Form.Control.Feedback type="invalid">
                  Please Enter Your Valid Password
                </Form.Control.Feedback>
                <Form.Text className="text-muted">
                  password must contain 8 characters
                </Form.Text>
              </Form.Group>
              <Form.Group
                as={Col}
                controlId="formBasicConfirmPassword"
                className="mb-4"
              >
                <Form.Label>ConfirmPassword</Form.Label>
                <Form.Control
                  required
                  minLength={8}
                  onChange={onChange}

                  type="password"
                  placeholder="confirm Password"
                  name='confirmPassword'
                  // defaultValue="Mark"
                />
                <Form.Control.Feedback type="invalid">
                  both password should match{" "}
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Check
                  required
                  label="Agree to terms and conditions"
                  feedback="You must agree before submitting."
                  feedbackType="invalid"
                />
              </Form.Group>
              Do you Have an Account Already ? <Link to={"/login"}>Login</Link>{" "}
              <br />
              <Button type="submit" className="mt-2">
                <Spinner
                  as="span"
                  animation="border"
                  size="sm"
                  role="status"
                  aria-hidden="true"
                />
                Submit
              </Button>
            </Form>
            <Alert variant="danger" className="mt-2">
              {" "}
              User With Same Email Name Already Exists
            </Alert>
            <Alert variant="info">User Created</Alert>
          </Col>
        </Row>
      </Container>
    </div>
  );
 };

export default RegisterPage;
