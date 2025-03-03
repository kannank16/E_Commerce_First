import React from "react";
import Carousel from "react-bootstrap/Carousel";
import { Link, NavLink } from "react-router-dom";
import Carousel_1 from "../assets/images/Carousel/carousel-1.png";
import Carousel_2 from "../assets/images/Carousel/carousel-2.png";
import Carousel_3 from "../assets/images/Carousel/carousel-3.png";
import { LinkContainer } from "react-router-bootstrap";
// import { LinkContainer } from "react-router-bootstrap";

const ProductCarousel = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          src={Carousel_1}
          alt="pending"
          className=" d-block w-100"
          style={{ height: "300px", objectFit: "cover" }}
        />
        <Carousel.Caption>
          <Link
            to={"/product-details"}
            className="text-decoration-none text-white"
          >
            <h3>Best Selling Laptops in laptop category </h3>
          </Link>
          <p>Dell inspiron 32Gb</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          src={Carousel_2}
          alt="pending"
          className="Carousel_Image d-block w-100"
          style={{ height: "300px", objectFit: "cover" }}
        />

        <Carousel.Caption>
          <Link
            to={"/product-details"}
            className="text-decoration-none text-white"
          > 
            <h3 className="mb-5">
              Best Selling Books in Books Category
            </h3>
          </Link>
          <p>Apj books</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          src={Carousel_3}
          alt="pending"
          className="Carousel_Image d-block w-100"
          style={{ height: "300px", objectFit: "cover" }}
        />
        <Carousel.Caption>
          <Link
            to={"/product-details"}
            className="text-decoration-none text-white"
          >
            <h3 as={Link} to="/product-details">
              Best Selling camera in camera Category
            </h3>
          </Link>
          <p>canon </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default ProductCarousel;
