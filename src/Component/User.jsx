import React, { useState } from "react";
import { Card, Container, Row, Col, Button } from "react-bootstrap";
import { Modal } from "react-bootstrap";
import EditUserForm from "./EditUserForm";
import "./User.css";

const User = (props) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleDelete = (e) => {
    e.preventDefault();
    props.deleteUser(props.userinfo.id);
  };

  return (
    <>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Update Employee Info</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <EditUserForm
            editUser={props.editUser}
            closeModal={handleClose}
            userinfo={props.userinfo}
          />
        </Modal.Body>
      </Modal>
      <div>
        <Container>
          <Row>
            <Col sm={6}>
              <Card style={{ width: "18rem" }}>
                <Card.Body>
                  <Card.Title>NEW EMPLOYEE</Card.Title>
                  <Card.Subtitle className="mb-2 ">
                    <p>FullName: {props.userinfo.name}</p>
                    <p>Email: {props.userinfo.email}</p>
                    <p>Phone Number: {props.userinfo.number}</p>
                    <p>Home Address: {props.userinfo.address}</p>
                    <p>Job Role: {props.userinfo.jobrole}</p>
                    <p>Current Salary: {props.userinfo.salary}</p>
                  </Card.Subtitle>
                  <Card.Text></Card.Text>
                  <Card.Link href="#">
                    <Button variant="outline-success" onClick={handleShow}>
                      Edit
                    </Button>
                  </Card.Link>
                  <Card.Link href="#">
                    <Button variant="outline-danger" onClick={handleDelete}>
                      Delete
                    </Button>
                  </Card.Link>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default User;
