import React, { Component } from "react";
// import Homepage from "../containers/Homepage"
// import LandingPage from "../containers/LandingPage"
import { Menu, Segment } from "semantic-ui-react";

class MenuBar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log("MenuBar Props are", this.props);
    console.log(localStorage.getItem('token'));
    const { activeItem } = this.props;

    return (
      <div className="menu-container">
          <Menu secondary size="massive">
            <Menu.Item header>Carry It</Menu.Item>
            <Menu.Item
              name="Profile"
              active={activeItem === "Profile"}
              onClick={this.props.handleItemClick}
              position="right"
            />
            <Menu.Item
              name="Message"
              active={activeItem === "Message"}
              onClick={this.props.handleItemClick}
            />
            <Menu.Item
              name="Activity"
              active={activeItem === "Activity"}
              onClick={this.props.handleItemClick}
            />
            <Menu.Item
              name="Log Out"
              active={activeItem === "Log Out"}
              onClick={this.props.handleItemClick}
            />
          </Menu>
      </div>
    );
  }
}

export default MenuBar;
