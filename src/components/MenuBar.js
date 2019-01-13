import React, { Component } from "react";
// import Homepage from "../containers/Homepage"
// import LandingPage from "../containers/LandingPage"
import { Menu, Segment } from "semantic-ui-react";

class MenuBar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log("MenuBar Props are", this.props)
  const { activeItem } = this.props;

    return (
      <div className="menu-container">
        <Segment inverted>
          <Menu inverted secondary>
            <Menu.Item as="h1" content="Carry It" />
            <Menu.Item
              name="home"
              active={activeItem === "home"}
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
        </Segment>
      </div>
    );
  }
}

export default MenuBar;
