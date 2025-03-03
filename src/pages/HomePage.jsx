import React from "react";
import ProductCarousel from "../components/ProductCarousel";
import CategoryCardComponent from "../components/CategoryCardComponent";
import Row from "react-bootstrap/Row";
import { Container } from "react-bootstrap";

const HomePage = () => {
  const categories = [
    "tapLets",
    "Monitors",
    "games",
    "printers",
    "laptops",
    "camera",
    "books",
    "iphone",
  ];
  return (
    <>
        <ProductCarousel />
        <Container>

        <Row xs={1} md={2} className="g-4 mt-5">
          {categories.map(() => (
            <CategoryCardComponent />
          ))}
        </Row>
      </Container>
    </>
  );
};

export default HomePage;
