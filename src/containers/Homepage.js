import React, { Component } from "react";
import MenuBar from "../components/MenuBar";
import Profile from "../components/Profile";
import PostContainer from "../containers/PostContainer";
import BagContainer from "../containers/BagContainer";

class Homepage extends Component {
  render() {
    return (
      <div className="homepage-container">
        <div className="Menu-bar">
          <MenuBar />
        </div>
        <div className="profile-container">
          <Profile />
        </div>
        <div className="post-package-container">
          <PostContainer />
        </div>
        <div className="bag-container">
          <BagContainer />
        </div>
      </div>
    );
  }
}

export default Homepage;
