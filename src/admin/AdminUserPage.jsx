import React from "react";
import { Row, Col, Table, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import AdminLinkComponent from "../components/admin/AdminLinkComponent";

const AdminUserPage = () => {
  const deleteHandler = () => {
    if (window.confirm("are you sure")) alert("user deleted");
  };
  return (
    <div>
      <Row className="m-5">
        <Col md={2}>
          <AdminLinkComponent />
        </Col>
        <Col md={10}>
          <h6>Users</h6>

          <Table striped bordered hover>
            <thead>
              <tr>
                <th>S.No</th>
                <th>FirstName </th>
                <th>LastName</th>
                <th> Email</th>
                <th>Is Admin</th>
                <th>Edit/Delete</th>
              </tr>
            </thead>
            <tbody>
              {["bi bi-check-lg text-success", "bi bi-x-lg text-danger"].map(
                (item, idx) => (
                  <tr key={idx}>
                    <td>{idx + 1}</td>
                    <td>Mark</td>
                    <td>k</td>
                    <td>example23@gmail.com</td>
                    <td>
                      <i className={item}></i>
                    </td>

                    <td>
                      <Link to={"/admin/edit-user"}>
                        <Button className="btn-sm">
                          <i className="bi bi-pencil-square"></i>{" "}
                        </Button>
                        {" / "}
                      </Link>{" "}
                      <Button
                        variant="danger"
                        className="btn-sm"
                        onClick={deleteHandler}
                      >
                        {" "}
                        <i className="bi bi-x-circle"></i>
                      </Button>
                    </td>
                  </tr>
                )
              )}
            </tbody>
          </Table>
        </Col>
      </Row>
    </div>
  );
};

export default AdminUserPage;
