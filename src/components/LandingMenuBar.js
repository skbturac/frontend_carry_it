import React, { Component } from "react";
import { Menu } from "semantic-ui-react";

class LandingMenuBar extends Component {
  // state = {
  //   activeItem: "home"
  // };
  //
  // handleItemClick = (e, { name }) => {
  //   this.setState({ activeItem: name });
  // };
  render() {
    // const { activeItem } = this.state;
    return (
      <div className="menu-container">
        <Menu secondary size="massive">
            <Menu.Item header>Carry It</Menu.Item>
          </Menu>
      </div>
    );
  }
}

export default LandingMenuBar;
// <Menu.Item
//   content="Login / SignUp"
//   active={activeItem === "Login / SignUp"}
//   onClick={this.handleItemClick}
//   position="right"
// />
