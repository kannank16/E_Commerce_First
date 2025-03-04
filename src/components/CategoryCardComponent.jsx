import React from "react";

import Books from "../assets/images/HomePage_images/Books.jpeg";
import Camera from "../assets/images/HomePage_images/Camera .jpeg";
import Games from "../assets/images/HomePage_images/Games.jpeg";
import Iphone from "../assets/images/HomePage_images/Iphone.jpeg";
import Laptop from "../assets/images/HomePage_images/Laptop.jpeg";
import Monitor from "../assets/images/HomePage_images/Monitor.jpeg";
import Printers from "../assets/images/HomePage_images/Printers.jpeg";
import Tablets from "../assets/images/HomePage_images/Tablets.jpeg";

import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const CategoryCardComponent = ({category,idx}) => {
  const Image = [
    Laptop,
    Tablets,
    Monitor,
    Games,
    Printers,
    Camera,
    Books,
    Iphone,
  ];

  return (
    
    <Card  className="">
      <Card.Img variant="top" src={Image[idx]} className='Image_hw'/>
      <Card.Body>
        <Card.Title>{category}</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
};

export default CategoryCardComponent;
