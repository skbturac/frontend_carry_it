import React, { Component } from "react";
import UserEditForm from "./userEditForm";
import { Divider, Header, Segment, Button, Popup } from "semantic-ui-react";

class ProfileDescription extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log("ProfileDescription Props Are ---", this.props);

    return (
      <div className="profile-description">
        <Segment>
          <Header as="h3">Username</Header>
          {this.props.userInfo.username}
          <Divider section />
          <Header as="h3">Bio</Header>
          <Segment>
            <i className="quote left icon" />
            {this.props.userInfo.bio}
          </Segment>
          <Divider section />
          <Header as="h3">Email Address</Header>
          <i className="envelope icon" />
          {this.props.userInfo.email_address}
          <Divider section />
          <Header as="h3">Phone Number</Header>
          <i className="phone icon" />
          {this.props.userInfo.phone_number}
          <Divider section />
          <Popup
            trigger={<Button content="Edit" icon="edit" size="big" />}
            flowing
            hoverable
          >
            <div className="user-edit-container">
              <UserEditForm />
            </div>
          </Popup>
        </Segment>
      </div>
    );
  }
}

export default ProfileDescription;
