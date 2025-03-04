import React from 'react'
import Form from 'react-bootstrap/Form';


const SortOptionsComponent = () => {
  return (
    <div> <Form.Select aria-label="Default select example">
    <option>sort by</option>
    <option value="1">One</option>
    <option value="2">Two</option>
    <option value="3">Three</option>
  </Form.Select></div>
  )
}

export default SortOptionsComponent