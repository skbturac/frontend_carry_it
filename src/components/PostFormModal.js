import React, { Component } from "react";
import { Button, Header, Icon, Modal, Form, Select } from "semantic-ui-react";

class PostFormModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: []
    };
  }

  componentDidMount() {
    fetch("http://localhost:4000/api/v1/users", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`
      }
    })
      .then(response => response.json())
      .then(usersData => {
        // console.log("Before setState --", usersData);
        let formattedUsers = usersData.map(user => {
          let formatUser = {};
          formatUser.key = user.id;
          formatUser.text = user.username;
          formatUser.value = user.username;
          // image: { avatar: true, src: '/images/avatar/small/jenny.jpg' },
          formatUser.image = { avatar: true, src: user.avatar };
          return formatUser;
        });
        this.setState({ users: formattedUsers });
      });
  }

  NewPackageFormModal = () => {
    return (
      <Modal trigger={<Button icon="add" size="massive" />}>
        <Modal.Header>Create a shipping order </Modal.Header>
        <Modal.Content image scrolling>
          <Icon disabled name="image outline" size="massive" fitted />

          <Modal.Description>
            <Header>Enter Your Pakage Details</Header>

            <div className="user-signup-form">
              <Form onSubmit={this.props.handleSubmit}>
                <Form.Input
                  label="Package Image"
                  placeholder="Copy & Past URL"
                  value={this.props.packageInfo.imageURLInput}
                  onChange={this.props.handleInputChange}
                  name="imageURLInput"
                />
                <Form.Input
                  label="Weight"
                  placeholder="Weight"
                  value={this.props.packageInfo.weightInput}
                  onChange={this.props.handleInputChange}
                  name="weightInput"
                />
                <Form.Input
                  label="Height"
                  placeholder="Height"
                  value={this.props.packageInfo.heightInput}
                  onChange={this.props.handleInputChange}
                  name="heightInput"
                />
                <Form.Input
                  label="Length"
                  placeholder="Length"
                  value={this.props.packageInfo.lengthInput}
                  onChange={this.props.handleInputChange}
                  name="lengthInput"
                />
                <Form.Input
                  label="Description"
                  placeholder="Description"
                  value={this.props.packageInfo.descriptionInput}
                  onChange={this.props.handleInputChange}
                  name="descriptionInput"
                />
                <Form.Input
                  label="Delivery Date"
                  placeholder="Arrival Date"
                  value={this.props.packageInfo.deliverydateInput}
                  onChange={this.props.handleInputChange}
                  name="deliverydateInput"
                />
                <Form.Select
                  fluid
                  search
                  selection
                  options={this.state.users}
                  onChange={this.props.handleDropdownChange}
                  label="Select Receiver"
                  placeholder="Receiver"
                  name="receiverIdInput"
                />
                <Button
                  content="Create Order"
                  icon="signup"
                  size="medium"
                  primary
                />
              </Form>
            </div>
          </Modal.Description>
        </Modal.Content>
        <Modal.Header> </Modal.Header>
      </Modal>
    );
  };

  render() {
    return <>{this.NewPackageFormModal()}</>;
  }
}

export default PostFormModal;

// <Button primary>
//   Create Order <Icon name="chevron right" />
// </Button>

// <Image
//   size="medium"
//   src="https://pamco-imaging.com/wp-content/uploads/2017/12/parcel-500-660-500x600.jpg"
//   wrapped
// />

//<Button content="Create Order" icon="signup" size="medium" primary />

// <p>
//   This is an example of expanded content that will cause the modal's
//   dimmer to scroll
// </p>
// <Form.Input
//   iconPosition="left"
//   label="Select Receiver"
//   placeholder="Select Receiver"
//   value={this.props.packageInfo.receiverIdInput}
//   onChange={this.props.handleInputChange}
//   name="receiverIdInput"
// />

// <Form.Select
//   options={this.state.users.map(user => (<li key={user.id}>{user.username}</li>))}
//   onChange={this.props.handleInputChange}
//   value={this.props.packageInfo.receiverIdInput}
//   label="Select Receiver"
//   placeholder="Select Receiver"
//   name="receiverIdInput"
// />
