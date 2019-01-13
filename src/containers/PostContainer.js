import React, { Component } from "react";
import PostForm from "../components/PostForm";
import Packages from "../components/Packages";
import { Card } from 'semantic-ui-react'

class PostContainer extends Component {
  render() {
    return (
      <div className="your-packages-and-postfrom-container">
        <Card>
          <PostForm />
          <Packages />
        </Card>
      </div>
    );
  }
}

export default PostContainer;
