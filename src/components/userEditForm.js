import React, { Component } from "react";
import { Button, Form } from "semantic-ui-react";

class UserEditForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imageURLInput: "",
      firstNameInput: "",
      lastNameInput: "",
      userNameInput: "",
      bioInput: "",
      email_addressInput: "",
      phone_numberInput: ""
    };
  }

  handleInputChange = event => {
    console.log(event.target.value);
    console.log(event.target.userNameInput);
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = () => {
    fetch(`http://localhost:4000/api/v1/update`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`
      },
      body: JSON.stringify({
        user: {
          first_name: this.state.firstNameInput,
          last_name: this.state.lastNameInput,
          username: this.state.userNameInput,
          bio: this.state.bioInput,
          avatar: this.state.imageURLInput,
          email_address: this.state.email_addressInput,
          phone_number: this.state.phone_numberInput
        }
      })
    })
      .then(response => response.json())
      .then(json => {
        console.log(json);
      });
  };

  render() {
    return (
      <div className="user-signup-form">
        <Form onSubmit={this.handleSubmit}>
          <Form.Input
            iconPosition="left"
            label="Profile Image"
            placeholder="Copy & Past URL"
            value={this.state.imageURLInput}
            onChange={this.handleInputChange}
            name="imageURLInput"
          />
          <Form.Input
            iconPosition="left"
            label="First Name"
            placeholder="First Name"
            value={this.state.firstNameInput}
            onChange={this.handleInputChange}
            name="firstNameInput"
          />
          <Form.Input
            iconPosition="left"
            label="Last Name"
            placeholder="Last Name"
            value={this.state.lastNameInput}
            onChange={this.handleInputChange}
            name="lastNameInput"
          />
          <Form.Input
            iconPosition="left"
            label="Username"
            placeholder="Username"
            value={this.state.userNameInput}
            onChange={this.handleInputChange}
            name="userNameInput"
          />
          <Form.Input
            iconPosition="left"
            label="Bio"
            placeholder="Bio"
            value={this.state.bioInput}
            onChange={this.handleInputChange}
            name="bioInput"
          />
          <Form.Input
            iconPosition="left"
            label="Email Address"
            placeholder="Email Address"
            value={this.state.email_addressInput}
            onChange={this.handleInputChange}
            name="email_addressInput"
          />
          <Form.Input
            iconPosition="left"
            label="Phone Number"
            placeholder="Phone Number"
            value={this.state.phone_numberInput}
            onChange={this.handleInputChange}
            name="phone_numberInput"
          />

          <Button content="Save" icon="save" size="medium" primary />
        </Form>
      </div>
    );
  }
}

export default UserEditForm;
