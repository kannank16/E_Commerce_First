import React from 'react'
import Form from 'react-bootstrap/Form';


const PriceFilterComponent = () => {
  return (
    <div><Form.Label>
        <span className='fw-b'>Price no lesser than:</span> 500$
    </Form.Label>
      <Form.Range min={10} max={1000} step={10}/></div>
  )
}

export default PriceFilterComponent