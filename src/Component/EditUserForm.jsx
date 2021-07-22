import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";
class EditUserForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: props.userinfo.name,
      email: props.userinfo.email,
      number: props.userinfo.number,
      address: props.userinfo.address,
      jobrole: props.userinfo.jobrole,
      salary: props.userinfo.salary,
      id: props.userinfo.id,
    };
  }
  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  handleSubmit = (e) => {
    e.preventDefault();

    this.props.editUser(this.state.id, this.state);

    this.setState({
      name: "",
      email: "",
      number: "",
      address: "",
      jobrole: "",
      salary: "",
    });
    this.props.closeModal();
  };
  render() {
    return (
      <div>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Full Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Full Name"
              onChange={this.handleChange}
              name="name"
              value={this.state.name}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              name="email"
              placeholder="email"
              onChange={this.handleChange}
              value={this.state.email}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Phone Number</Form.Label>
            <Form.Control
              type="tel"
              name="number"
              placeholder="Phone Number"
              onChange={this.handleChange}
              value={this.state.number}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Home Address</Form.Label>
            <Form.Control
              type="text"
              name="address"
              placeholder="Home Address"
              onChange={this.handleChange}
              value={this.state.address}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Job Role</Form.Label>
            <Form.Control
              type="text"
              name="jobrole"
              placeholder="Job Role"
              onChange={this.handleChange}
              value={this.state.jobrole}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Current Salary</Form.Label>
            <Form.Control
              type="number"
              placeholder="Current Salary"
              name="salary"
              onChange={this.handleChange}
              value={this.state.salary}
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            Update employee info
          </Button>
        </Form>
      </div>
    );
  }
}

export default EditUserForm;
