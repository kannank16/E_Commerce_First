import React from "react";
import { Row, Col, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import AdminLinkComponent from "../components/admin/AdminLinkComponent";

const AdminOrdersPage = () => {
  return (
    <div>
      <Row className="m-5">
        <Col md={2}><AdminLinkComponent/></Col>
        <Col md={10}>
        <h6>my orders</h6>

          <Table striped bordered hover>
            <thead>
              <tr>
                <th>S.No</th>
                <th>User </th>
                <th>Date</th>
                <th>Total</th>
                <th>Delivered</th>
                <th>payment method</th>
                <th>order Details</th>
              </tr>
            </thead>
            <tbody>
              {["bi bi-check-lg text-success","bi bi-x-lg text-danger"].map((item,idx)=>(<tr key={idx}>
                <td>{idx+1}</td>
                <td>Mark</td>
                <td>25:04:2025</td>
                <td>100</td>
                <td><i className={item}></i></td>
                <td>pay pal</td>
                <td><Link to={'/user/order-details'}>Go to Orders</Link></td>
              </tr>))}
              
            </tbody>
          </Table>
        </Col>
      </Row>
    </div>
  );
};

export default AdminOrdersPage;



