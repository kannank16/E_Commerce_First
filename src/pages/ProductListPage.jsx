import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/esm/Button";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


import SortOptionsComponent from "../components/SortOptionsComponent";
import PriceFilterComponent from "../components/filterQueryResultOptions/PriceFilterComponent";
import RatingFilterComponent from "../components/filterQueryResultOptions/RatingFilterComponent";
import AttributeFilterComponent from "../components/filterQueryResultOptions/AttributeFilterComponent";
import ProductForListComponent from "../components/ProductForListComponent";
import PaginationComponent from "../components/PaginationComponent";
import CategoryFilterComponent from "../components/filterQueryResultOptions/CategoryFilterComponent";

const ProductListPage = () => {
  return (
    <div>
         <Container fluid>
      <Row >
        <Col md={3}><ListGroup variant="flush">
        <ListGroup.Item>{<SortOptionsComponent />}</ListGroup.Item>
        <ListGroup.Item>{<PriceFilterComponent />}</ListGroup.Item>
        <ListGroup.Item>{<RatingFilterComponent />}</ListGroup.Item>
        <ListGroup.Item>{<CategoryFilterComponent/>}</ListGroup.Item>
        <ListGroup.Item>{<AttributeFilterComponent />}</ListGroup.Item>
        <ListGroup.Item><Button variant='primary'> Filter
          </Button>
          <Button variant='danger'>reset filter</Button></ListGroup.Item>
      </ListGroup></Col>
      <Col md={9}>
      {<ProductForListComponent/>}
      {<PaginationComponent/>}
      </Col>
      </Row>
    </Container>
      
    </div>
  );
};

export default ProductListPage;
