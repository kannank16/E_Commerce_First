import React from "react";
import Form from "react-bootstrap/Form";

const AttributeFilterComponent = () => {
  return (
    <div>
        <Form.Label>
            color
        </Form.Label>
      <Form.Check 
              type='checkbox'
              id='default-checkbox'
              label='green'
            />

    </div>
  );
};

export default AttributeFilterComponent;
