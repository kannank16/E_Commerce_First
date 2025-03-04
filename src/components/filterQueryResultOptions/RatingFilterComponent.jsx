import React from "react";
import { Fragment } from "react";
import Form from "react-bootstrap/Form";
import { Rating } from "react-simple-star-rating";

const RatingFilterComponent = () => {
  return (
    <div>
        <span className="fw-bold">Rating</span>
      {Array.from({ length: 5 }).map((_default, idx) => (
        <Fragment key={idx}>
          <Form.Check type="checkbox" id={`check-api-`}>
            <Form.Check.Input
              style={{ cursor: "pointer" }}
              type="checkbox"
              isValid
            />
            <Form.Check.Label>
              <Rating readonly size={20} initialValue={5 - idx} />
            </Form.Check.Label>
          </Form.Check>
        </Fragment>
      ))}
    </div>
  );
};

export default RatingFilterComponent;
