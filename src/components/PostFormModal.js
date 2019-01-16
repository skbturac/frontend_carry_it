import React, { Component } from "react";
import { Button, Header, Icon, Modal, Form } from "semantic-ui-react";

class PostFormModal extends Component {
  constructor(props) {
    super(props);
    this.state = {};
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
              <Form
                onSubmit={this.props.handleSubmit}
              >
                <Form.Input
                  iconPosition="left"
                  label="Package Image"
                  placeholder="Copy & Past URL"
                  value={this.props.packageInfo.imageURLInput}
                  onChange={this.props.handleInputChange}
                  name="imageURLInput"
                />
                <Form.Input
                  iconPosition="left"
                  label="Weight"
                  placeholder="Weight"
                  value={this.props.packageInfo.weightInput}
                  onChange={this.props.handleInputChange}
                  name="weightInput"
                />
                <Form.Input
                  iconPosition="left"
                  label="Height"
                  placeholder="Height"
                  value={this.props.packageInfo.heightInput}
                  onChange={this.props.handleInputChange}
                  name="heightInput"
                />
                <Form.Input
                  iconPosition="left"
                  label="Length"
                  placeholder="Length"
                  value={this.props.packageInfo.lengthInput}
                  onChange={this.props.handleInputChange}
                  name="lengthInput"
                />
                <Form.Input
                  iconPosition="left"
                  label="Description"
                  placeholder="Description"
                  value={this.props.packageInfo.descriptionInput}
                  onChange={this.props.handleInputChange}
                  name="descriptionInput"
                />
                <Form.Input
                  iconPosition="left"
                  label="Delivery Date"
                  placeholder="Arrival Date"
                  value={this.props.packageInfo.deliverydateInput}
                  onChange={this.props.handleInputChange}
                  name="deliverydateInput"
                />
                <Button
                  content="Create Order"
                  icon="signup"
                  size="medium"
                  onClick={() => this.props.handleDisplay()}
                  primary
                />
              </Form>
            </div>
          </Modal.Description>
          <Modal.Actions />
        </Modal.Content>
      </Modal>
    );
  };

  render() {
    console.log("Props PostFormModal aree ---,", this.props);
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
