import React, { Component } from "react";
import { Header, Image } from "semantic-ui-react";

class ProfileImage extends Component {
  render() {
    return (
      <div className="profile-image">
        <Header as="h2">
          <Image
            circular
            src="https://react.semantic-ui.com/images/avatar/large/patrick.png"
          />{" "}
          Patrick Maclean
        </Header>
      </div>
    );
  }
}

export default ProfileImage;
