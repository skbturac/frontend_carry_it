import React, { Component } from "react";
import {
  Divider,
  Header,
  Image,
  Segment,
  Icon,
  Button
} from "semantic-ui-react";

class ProfileDescription extends Component {
  render() {
    return (
      <div className="profile-description">
        <Segment>
          <Header as="h3">Username</Header>
          BlaasPatrickMaclean
          <Divider section />
          <Header as="h3">Bio</Header>
          <i class="quote left icon" />
          Lorem ipsum dolor sit amet, cons Lorem ipsum dolor sit amet, cons
          Lorem ipsum dolor sit amet, cons
          <Divider section />
          <Header as="h3">Email Address</Header>
          <i class="envelope icon" />
          selo@gmail.com
          <Divider section />
          <Header as="h3">Phone Number</Header>
          <i class="phone icon" />
          (310) 443 - 4345
          <Divider section />
          <Button primary>Edit</Button>
          <Button primary>Save</Button>
        </Segment>
      </div>
    );
  }
}

export default ProfileDescription;
