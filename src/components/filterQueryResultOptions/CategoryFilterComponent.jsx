import React from "react";
import Form from "react-bootstrap/Form";

const CategoryFilterComponent = () => {
  return (
    <div>
      <span className="fw-bold">Category</span>
      <Form>
        {Array.from({ length: 5 }).map((_, idx) => (
          <div key={idx} className="">
            <Form.Check type="checkbox" id={`check-api-${idx}`}>
              <Form.Check.Input type="checkbox" isValid />
              <Form.Check.Label>Category- {idx+1} </Form.Check.Label>
            </Form.Check>
          </div>
        ))}
      </Form>
    </div>
  );
};

export default CategoryFilterComponent;
