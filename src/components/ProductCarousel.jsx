import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Carousel_1 from '../assets/images/Carousel/Carousel_1.png'
import Carousel_2 from '../assets/images/Carousel/Carousel_2.png'
import Carousel_3 from '../assets/images/Carousel/Carousel_3.png'

const ProductCarousel = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img src={Carousel_1} alt="pending" className='Carousel_Image'/>
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src={Carousel_2} alt="pending" />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src={Carousel_3} alt="pending" />
      <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default ProductCarousel;
