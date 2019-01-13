import React, { Component } from "react";
import { Divider, Header, Segment, Button } from "semantic-ui-react";

class ProfileDescription extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <div className="profile-description">
        <Segment>
          <Header as="h3">Username</Header>
          BlaasPatrickMaclean
          <Divider section />
          <Header as="h3">Bio</Header>
          <Segment>
            <i className="quote left icon" />
            Lorem ipsum dolor sit amet, cons Lorem ipsum dolor sit amet, cons
            Lorem ipsum dolor sit amet, cons
          </Segment>
          <Divider section />
          <Header as="h3">Email Address</Header>
          <i className="envelope icon" />
          selo@gmail.com
          <Divider section />
          <Header as="h3">Phone Number</Header>
          <i className="phone icon" />
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
