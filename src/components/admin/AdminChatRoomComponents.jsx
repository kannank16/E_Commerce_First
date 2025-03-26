import React, { Fragment } from "react";
import { Form, Toast, Button } from "react-bootstrap";
import { useState } from "react";

const AdminChatRoomComponents = () => {
    const [Toast1,closeToast1]=useState(true)
    const Close1=()=>{
        closeToast1(false)
    }

  return (
    <div>
      <div style={{ maxHeight: "500px", overflow: "auto" }}>
        <Toast show={Toast1} onClose={Close1}>
          <Toast.Header>
            <strong className="me-auto">Chat with John</strong>
          </Toast.Header>
          <Toast.Body>
            {Array.from({ length: 30 }).map((_default, idx) => (
              <Fragment key={idx}>
                {" "}
                <p className="bg-primary p-3 rounded-pill ms-4 text-light">
                  <b>User Wrote:</b>Hello, world! This is a toast message.
                </p>
                <p>
                  <b>Admin Wrote:</b>Hello, world! This is a toast message.
                </p>
              </Fragment>
            ))}
            <Form>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label>Write a Message</Form.Label>
                <Form.Control as="textarea" rows={3} />
              </Form.Group>
            </Form>
            <Button variant="success">submit</Button>
          </Toast.Body>
        </Toast>
      </div>{" "}
    </div>
  );
};

export default AdminChatRoomComponents;
