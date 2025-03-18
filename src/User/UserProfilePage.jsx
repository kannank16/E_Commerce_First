import React from "react";

import { Container, Row, Col, Form, Button, Alert } from "react-bootstrap";
import { useState } from "react";

const UserProfilePage = () => {
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
    const confirmPassword = document.querySelector(
      'input[name="confirmPassword"]'
    );
    if (confirmPassword.value === password.value) {
      confirmPassword.setCustomValidity("");
    } else {
      confirmPassword.setCustomValidity("password do not match");
    }
  };
  return (
    <div>
      <Container>
        <Row className="mt-5 justify-content-md-center">
          <Col md={6}>
            <h1>User Profile</h1>
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
              <Form.Group
                as={Col}
                controlId="validationCustom01"
                className="mb-4"
              >
                <Form.Label> Your name</Form.Label>
                <Form.Control required type="text" defaultValue={"kannan"} />
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
                <Form.Control required type="text" defaultValue={"k"} />
                <Form.Control.Feedback type="invalid">
                  Please Enter Your Last Name
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} controlId="FormBasicEmail" className="mb-4">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  required
                  type="email"
                  disabled
                  // placeholder="Enter Your Email Address"
                  defaultValue="Mark@gmail.com"
                />
                <Form.Control.Feedback type="invalid">
                  Please Enter Your valid Email
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group
                as={Col}
                controlId="FormBasicPhoneNumber"
                className="mb-4"
              >
                <Form.Label>Phone Number</Form.Label>
                <Form.Control required type="text" minLength={10} />
                <Form.Control.Feedback type="invalid">
                  Please Enter Your PhoneNumber
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group
                as={Col}
                controlId="FormBasicAddress"
                className="mb-4"
              >
                <Form.Label>Address</Form.Label>
                <Form.Control required type="text" />
                <Form.Control.Feedback type="invalid">
                  Please Enter Your Address
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group
                as={Col}
                controlId="FormBasicCountry"
                className="mb-4"
              >
                <Form.Label>country</Form.Label>
                <Form.Control required type="text" />
                <Form.Control.Feedback type="invalid">
                  Please Enter Your Country
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} controlId="FormBasicZip" className="mb-4">
                <Form.Label>ZipCode</Form.Label>
                <Form.Control required type="text" />
                <Form.Control.Feedback type="invalid">
                  Please Enter Your ZipCode
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} controlId="FormBasicCity" className="mb-4">
                <Form.Label>city</Form.Label>
                <Form.Control required type="text" />
                <Form.Control.Feedback type="invalid">
                  Please Enter Your City
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} controlId="FormBasicState" className="mb-4">
                <Form.Label>State</Form.Label>
                <Form.Control required type="text" />
                <Form.Control.Feedback type="invalid">
                  Please Enter Your State
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group
                as={Col}
                controlId="FormBasicPassword"
                className="mb-4"
              >
                <Form.Label>Password</Form.Label>
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
                  name="confirmPassword"
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
              <br />
              <Button type="submit" className="mt-2">
                Update
              </Button>
            </Form>

            <Alert variant="info">User Updated</Alert>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default UserProfilePage;
