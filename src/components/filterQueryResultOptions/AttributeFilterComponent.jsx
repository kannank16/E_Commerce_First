import React from "react";
import Form from "react-bootstrap/Form";

const AttributeFilterComponent = () => {
  return (
    <div>
        {[{color:['red','green','Blue','black']},
            {Ram:['1Tb','2TB','4TB']}
        ].map((item,idx)=>(<>

        <Form.Label className="fw-bold" key={idx}>
            {Object.keys(item)}
        </Form.Label>
        {item[Object.keys(item)].map((i,idx)=>(<Form.Check 
              type='checkbox'
              id='default-checkbox'
              label={i}
              key={idx}
            />))}

      
        </>))}
        

    </div>
  );
};

export default AttributeFilterComponent;
