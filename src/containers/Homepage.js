import React, { Component } from "react";
import MenuBar from "../components/MenuBar";
import Profile from "../components/Profile";
import PostContainer from "../containers/PostContainer";
import BagContainer from "../containers/BagContainer";
import { Header } from "semantic-ui-react";

class Homepage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeItem: "home"
    };
  }

  handleItemClick = (event, { name }) => {
    console.log(event.target);
    this.setState({ activeItem: name });
  };

  render() {
    return (
      <div className="homepage-container">
        <div className="Menu-bar">
          <MenuBar handleItemClick={this.handleItemClick} />
        </div>
        <div className="profile-container">
          <Profile handleItemClick={this.handleItemClick} />
        </div>
        <div className="bags-container">
          <Header as="h2" icon="boxes" content="Packages to deliver" />
          <BagContainer handleItemClick={this.handleItemClick} />
        </div>
        <div className="post-package-container">
          <Header as="h2" icon="shipping fast" content="Shiping Order" />
          <PostContainer handleItemClick={this.handleItemClick} />
        </div>
      </div>
    );
  }
}

export default Homepage;
