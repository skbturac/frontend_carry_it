import React, { Component } from "react";
import { Button, Dimmer, Header, Image } from "semantic-ui-react";

class Posts extends Component {
  state = {};

  handleShow = () => this.setState({ active: true });
  handleHide = () => this.setState({ active: false });

  render() {
    const { active } = this.state;
    const content = (
      <div>
        <Header as="h2" inverted>
          Title
        </Header>

        <Button primary>Add</Button>
        <Button>View</Button>
      </div>
    );

    return (
      <Dimmer.Dimmable
        as={Image}
        dimmed={active}
        dimmer={{ active, content }}
        onMouseEnter={this.handleShow}
        onMouseLeave={this.handleHide}
        size="medium"
        src="https://pamco-imaging.com/wp-content/uploads/2017/12/parcel-500-660-500x600.jpg"
      />
    );
  }
}

export default Posts;
