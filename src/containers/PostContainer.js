import React, { Component } from "react";
import Packages from "../components/Packages";
import { Card } from "semantic-ui-react";

class PostContainer extends Component {
  render() {
    return (
      <div className="your-packages-and-postfrom-container">
        <Card.Group itemsPerRow={2}>
          <Packages />
        </Card.Group>
      </div>
    );
  }
}

export default PostContainer;
