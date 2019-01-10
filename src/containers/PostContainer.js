import React, { Component } from "react";
import PostForm from "../components/PostForm";
import Packages from "../components/Packages";

class PostContainer extends Component {
  render() {
    return (
      <div className="your-packages-and-postfrom-container">
        <PostForm />
        <Packages />
      </div>
    );
  }
}

export default PostContainer;
