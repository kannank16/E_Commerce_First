import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Iphone from '../assets/images/HomePage_images/Iphone.jpeg'
import {Row,Col} from 'react-bootstrap'
import {Rating} from 'react-simple-star-rating'
import { Link } from 'react-router-dom';





const ProductForListComponent = (images,idx) => {
  return (
    <div> <Card style={{marginTop:'30px',
    marginBottom:"50px"}}>

      <Row>
        <Col lg={3}>    <Card.Img variant="top" src={Iphone} />

        </Col>
        <Col lg={7}>    <Card.Body>
      <Card.Title>Product Name</Card.Title>
      <Card.Text>
        Some quick example text to build on the card title and make up the
        bulk of the card's content.
      </Card.Text>
      <Card.Text>
        <Rating readonly initialValue={5} size={20}/>
      </Card.Text>
      <Card.Text className='h4'>
        123${" "}
        <Button  as={Link} to={'/product-details'} variant='danger'>
          see products
        </Button>
      </Card.Text>
      <Button variant="primary">Go somewhere</Button>
    </Card.Body></Col>
      </Row>

  </Card></div>
  )
}

export default ProductForListComponent