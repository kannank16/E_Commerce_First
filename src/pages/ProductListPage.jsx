import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/esm/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import SortOptionsComponent from "../components/SortOptionsComponent";
import PriceFilterComponent from "../components/filterQueryResultOptions/PriceFilterComponent";
import RatingFilterComponent from "../components/filterQueryResultOptions/RatingFilterComponent";
import AttributeFilterComponent from "../components/filterQueryResultOptions/AttributeFilterComponent";
import ProductForListComponent from "../components/ProductForListComponent";
import PaginationComponent from "../components/PaginationComponent";
import CategoryFilterComponent from "../components/filterQueryResultOptions/CategoryFilterComponent"; 

import Books from "../assets/images/HomePage_images/Books.jpeg";
import Camera from "../assets/images/HomePage_images/Camera .jpeg";
import Games from "../assets/images/HomePage_images/Games.jpeg";
import Iphone from "../assets/images/HomePage_images/Iphone.jpeg";
import Laptop from "../assets/images/HomePage_images/Laptop.jpeg";
import Monitor from "../assets/images/HomePage_images/Monitor.jpeg";
import Printers from "../assets/images/HomePage_images/Printers.jpeg";
import Tablets from "../assets/images/HomePage_images/Tablets.jpeg"; 

const ProductListPage = () => {
  return (
    <div>
      <Container fluid>
        <Row>
          <Col md={3}>
            <ListGroup variant="flush">
              <ListGroup.Item className="mb-3 mt-1">
                <SortOptionsComponent />
              </ListGroup.Item>
              <ListGroup.Item>
                Filter: <br />
                <PriceFilterComponent />
              </ListGroup.Item>
              <ListGroup.Item>
                <RatingFilterComponent />
              </ListGroup.Item>
              <ListGroup.Item>
                <CategoryFilterComponent />
              </ListGroup.Item>
              <ListGroup.Item>
                <AttributeFilterComponent />
              </ListGroup.Item>
              <ListGroup.Item>
                <Button variant="primary"> Filter</Button>
                <Button variant="danger">reset filter</Button>
              </ListGroup.Item>
            </ListGroup>
          </Col>
          <Col md={9}>
            {Array.from({ length: 5 }).map((items, idx) => (
              <ProductForListComponent
                key={idx}
                images={[Laptop, Tablets, Monitor, Games, Printers]}
              />
            ))}
            {<ProductForListComponent />}
            {<PaginationComponent />}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ProductListPage;
