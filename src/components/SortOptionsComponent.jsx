import React from 'react'
import Form from 'react-bootstrap/Form';


const SortOptionsComponent = () => {
  return (
    <div> <Form.Select aria-label="Default select example">
    <option>sort by</option>
    <option value="price_1">price: Low to High</option>
    <option value="price_-1">Price: High to L</option>
    <option value="rating_-1">Rating</option>
    <option value="name_1">Name : A to Z</option>
    <option value="name_-1">Name : Z to A</option>
  </Form.Select></div>
  )
}

export default SortOptionsComponent