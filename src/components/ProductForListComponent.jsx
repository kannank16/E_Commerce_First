import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Iphone from '../assets/images/HomePage_images/Iphone.jpeg'

const ProductForListComponent = () => {
  return (
    <div> <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={Iphone} />
    <Card.Body>
      <Card.Title>Card Title</Card.Title>
      <Card.Text>
        Some quick example text to build on the card title and make up the
        bulk of the card's content.
      </Card.Text>
      <Button variant="primary">Go somewhere</Button>
    </Card.Body>
  </Card></div>
  )
}

export default ProductForListComponent