import React, { Component } from "react";
import ProfileContainer from "./ProfileContainer";
import ActivityContainer from "./ActivityContainer";

class Homepage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeItem: "Activity"
    };
  }

  handleItemClick = (event, { name }) => {
    this.setState({ activeItem: name });
  };

  handleSubmit = () => {};

  whatToRender = () => {
    if (this.state.activeItem === "Log Out") {
      localStorage.removeItem("token") && this.props.handleLogOut()
    } else if (this.state.activeItem === "Profile") {
      return <ProfileContainer handleItemClick={this.handleItemClick} />;
    } else if (this.state.activeItem === "Activity") {
      return <ActivityContainer handleItemClick={this.handleItemClick} />;
    } else if (this.state.activeItem === "Messages") {
      this.props.handleAuth();
    }
  };

  render() {
    // console.log(this.state.activeItem);
    return <div className="homepage-container">{this.whatToRender()}</div>;
  }
}

export default Homepage;
